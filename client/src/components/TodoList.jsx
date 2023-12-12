import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({posts, deletePost, getAllPost}) => {
    if (!posts.length){
        return (
            <div className="todos__list">
                <h1>Задач нет</h1>
            </div>
            )
    }
    return (
        <div className="todos__list">
            {
                posts.map(post => <TodoItem key={post.id} post={post} getAllPost={getAllPost} deletePost={deletePost}/>
                )}
        </div>
    );
};

export default TodoList;