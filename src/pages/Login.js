import React from "react";
import "../components/Total.css";
import {useNavigate} from 'react-router-dom';

const Login = ({setAuth}) => {
    const navigate = useNavigate()
    const login = (e) => {
        e.preventDefault();
        console.log('로그인테스트');
        setAuth(true)
        navigate('/')
    }
    return (
        <div className="login-form">
            <form onSubmit={(e) => {login(e)}}>
                <div className="input-id">
                    <label htmlFor='useId'>ID</label>
                    <input type="text" id="userId" placeholder="아이디를 입력해주세요." autoComplete="off" />
                </div>
                <div className="input-pw">
                    <label htmlFor='usePass'>PW</label>
                    <input type="password" id="userPass" placeholder="비밀번호를 입력해주세요." autoComplete="off" />
                </div>
                <div className="login-btn">
                    <input type="submit" value="로그인" />
                </div>
            </form>
        </div>
    );
}

export default Login;