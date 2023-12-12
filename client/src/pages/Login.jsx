import React, {useState} from 'react';
import MyBtn from "../components/MyBtn/MyBtn";
import MyInput from "../components/Myinput/MyInput";
import axios from "axios";
import MyModal from "../components/MyModal/MyModal";

const Login = () => {
    const [data, setData] = useState({
        email: '',
        username: '',
        password: ''
    })
    const [modal, setModal] = useState(false)
    const [error, setError] = useState('')
    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const createUser = await axios.post( 'http://localhost:5000/api/user/reg', {
                username: data.username,
                email: data.email,
                password: data.password,
            })
            setData({
                email: '',
                username: '',
                password: ''}
            );
            alert("Вы зарегестрировались")
            window.location.href = './todos'
        }catch (e){
            return (
                <div>{e}</div>
            )
        }

    }
    const loginUser = async (e) =>{
        e.preventDefault();
        try {
            const loginUser = await axios.post('http://localhost:5000/api/user/login', {

                username: data.username,
                email: data.email,
                password: data.password,
            })
            console.log(loginUser.statusText)
            if (loginUser.status !== 500){
                setData({
                    email: '',
                    username: '',
                    password: ''}
                );
                alert("Вы зарегестрировались")
                window.location.href = './todos'
            }else{
                alert('Пользователь не найден')
            }

        }catch (error){
            const modelError = document.getElementById('error')
            setError(error)
                setModal(true)

        }

    }
    return (
        <div>
        <MyModal visible={modal} setVisible={setModal}>
            {error.message}

        </MyModal>
            <form className='form'>
                <h1 className='form__item'>Вход/Регистрация</h1>
                <MyInput onChange={(e)=> setData({...data, email: e.target.value})} value={data.email}  type="email" placeholder='example@example.com'/>
                <MyInput onChange={(e)=> setData({...data, username: e.target.value})} value={data.username}  type="username" placeholder='username'/>
                <MyInput onChange={(e)=> setData({...data, password : e.target.value})} value={data.password}  type="password"/>
                <MyBtn onClick={registerUser} className='form__item'>Зарегестрироваться</MyBtn>
                <MyBtn onClick={loginUser} className='form__item'>Войти</MyBtn>
            </form>
        </div>

    );
};

export default Login;