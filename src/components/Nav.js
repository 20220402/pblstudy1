import React from "react";
import "./Total.css";
import {Link,useNavigate} from 'react-router-dom';

const Nav = ({auth,setAuth}) => {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login')
    }
    return(
        <nav className="nav">
            <Link to = '/'><h1 className="nav-title">게시판</h1></Link>
            <div className="login_btn">
                {
                    auth?
                    <span onClick={()=>setAuth(false)}>
                        logout
                    </span> :
                    <span onClick={()=>goToLogin()}>login</span>
                }
            </div>
        </nav>
    );
};

export default Nav;