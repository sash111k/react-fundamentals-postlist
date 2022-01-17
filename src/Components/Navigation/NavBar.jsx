import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import '../../styles/app.css'
import {AuthContext} from "../../context";
const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        localStorage.removeItem('auth')
        setIsAuth(false)
    }
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link className="navbar__link" to="/about">About</Link>
                <Link className="navbar__link" to="/posts">Posts</Link>
                {isAuth &&
                    <span className="navbar__link" onClick={logout}>Logout</span>
                }
            </div>
        </div>
    );
};

export default NavBar;