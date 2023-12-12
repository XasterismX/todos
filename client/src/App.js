import './App.css';
import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Todos from "./pages/Todos";
import Login from "./pages/Login";
import Error from "./pages/Error";

const App = () =>{

    return(
                <BrowserRouter>
                    <Routes>
                        <Route path='/todos' element={<Todos/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/error' element={<Error/>}/>
                        <Route path='*' element={<Navigate replace to='/login'/>}/>
                    </Routes>
                </BrowserRouter>
    );
}

export default App;
