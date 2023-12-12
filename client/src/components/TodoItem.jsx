import React from 'react';
import MyBtn from "./MyBtn/MyBtn";

const TodoItem = ({post, deletePost, getAllPost}) => {
    return (
        <div className='todos__item' key={post.id}>
            <h1>{post.id}. {post.header}</h1>
            <span>{post.body}</span>
            <MyBtn onClick={() => {
                deletePost(post.id)
                getAllPost()
            }}>Удалить</MyBtn>
        </div>
    );
};

export default TodoItem;