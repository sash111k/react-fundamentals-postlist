import React from 'react';
import Post from "../Post/Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            {posts.length !== 0 ?
                <h1 style={{textAlign: 'center'}}>{title}</h1>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }
            <TransitionGroup>
                {

                    posts.map((post, index) =>
                        <CSSTransition
                            key = {post.id}
                            timeout={500}
                            classNames="post">
                        <Post remove={remove} number={index + 1} post={post} key={post.id}/>
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    );
};

export default PostList;