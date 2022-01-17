import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";


const PostIdPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isPostLoading] = useFetching(async () => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchCommentsByPostId, isCommentsLoading] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById()
        fetchCommentsByPostId()
    }, [])
    return (
        <div>
            {isPostLoading
                ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
                : <h1>{post.id}. {post.title}</h1>
            }
            <h1>Comments</h1>
            {isCommentsLoading
                ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
                : <div>
                    {
                        comments.map(comm =>
                            <div key={comm.id} style={{marginTop: "15px"}}>
                                <h5>{comm.email}</h5>
                                <div>{comm.body}</div>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    );
};

export default PostIdPage;