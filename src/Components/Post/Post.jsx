import React from 'react';
import MyButton from "../UI/button/MyButton";
import {useNavigate} from "react-router-dom";
const Post = ({post, number, remove}) => {
    const navigate = useNavigate();
    function deletePost(event) {
        event.stopPropagation()
        remove(post);
    }
    function openPost(event){
        navigate(`/posts/${post.id}`)
    }
    return (
        <div className="post" onClick={openPost}>
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <MyButton onClick = {deletePost}>Удалить</MyButton>
        </div>
    );
};

export default Post;