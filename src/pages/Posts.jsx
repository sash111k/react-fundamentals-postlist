import React, {useEffect, useRef, useState} from 'react';
import '../styles/app.css'

import Pagination from "../Components/UI/pagination/Pagination";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import PostService from "../API/PostService";
import MyButton from "../Components/UI/button/MyButton";
import MyModal from "../Components/UI/MyModal/MyModal";
import PostForm from "../Components/PostForm/PostForm";
import PostFilter from "../Components/PostFilter/PostFilter";
import PostList from "../Components/PostList/PostList";
import Loader from "../Components/UI/Loader/Loader";
import {useObserver} from "../hooks/useObserver";



function Posts() {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastDOMElement = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts ,...response.data]);
        setTotalPages(getPageCount(+response.headers['x-total-count'], limit))
    })

    useObserver(lastDOMElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(async () => {
        await fetchPosts();
    }, [page])

    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModal(false);
    }

    function removePost(post) {
        setPosts(posts.filter(p => {
            return p.id !== post.id
        }))
    }


    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
            {isPostsLoading &&
                <div style={{display: "flex", justifyContent: "center", margin: "10px 0"}}><Loader/></div>
            }
            <div ref={lastDOMElement} style={{height: "2px"}}/>
        </div>
    );
}

export default Posts;