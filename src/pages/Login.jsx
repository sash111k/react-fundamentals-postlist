import React, {useContext} from 'react';
import MyInput from "../Components/UI/input/MyInput";
import MyButton from "../Components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext)
    function submit(event){
        event.preventDefault();
        localStorage.setItem('auth', 'true');
        setIsAuth(true)
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <MyInput type="text" placeholder="Input login"/>
                <MyInput type="password" placeholder="Input login"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;