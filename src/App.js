import React, {useEffect, useState} from 'react';
import About from "./pages/About";
import {BrowserRouter, Link, Redirect, Route, Routes, Navigate} from "react-router-dom";
import Posts from "./pages/Posts";
import NavBar from "./Components/Navigation/NavBar";
import Error from "./pages/error";
import AppRouter from "./Components/AppRouter/AppRouter";
import {AuthContext} from "./context";


function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (localStorage.getItem('auth')){
            setIsAuth(true);
        }
        setIsLoading(false)
    })
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <NavBar/>
                <AppRouter></AppRouter>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;