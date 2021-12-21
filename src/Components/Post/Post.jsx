import React from 'react';
import MyButton from "../UI/button/MyButton";
const Post = ({post, number, remove}) => {
    function deletePost() {
        remove(post);
    }
    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <MyButton onClick = {deletePost}>Удалить</MyButton>
        </div>
    );
};

export default Post;