import React, {useEffect, useState} from 'react';
import '../App.css';
import axios from "axios";
import TodoList from "../components/TodoList";
import MyModal from "../components/MyModal/MyModal";

const Todos = () => {
    const [posts, setPost] = useState([])
    const getAllPost = async () =>{
        const gotPosts = await axios.get('http://localhost:5000/api/todo/all')
        setPost(gotPosts.data)
    }
    const deletePost = async (postId) => {
        const deletedPost = await axios.delete(`http://localhost:5000/api/todo/delete/${postId}`);
        return deletedPost.data;
    }

    useEffect(()=>{
        getAllPost()
    }, [])
    return (
        <div>
            <MyModal>

            </MyModal>
            <TodoList posts={posts} getAllPost={getAllPost} deletePost={deletePost}/>
        </div>
    );
};

export default Todos;