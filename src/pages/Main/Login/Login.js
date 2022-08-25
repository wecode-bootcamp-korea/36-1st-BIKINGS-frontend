import React, { useState, useEffect } from 'react';
import LoginInput from './LoginInput';
import './Login.scss';

const Login = ({ togleLogin }) => {
  const [isLoginMode, setreplace] = useState(false);

  const popSignup = () => {
    setreplace(isLoginMode => !isLoginMode);
  };

  const closeModal = e => {
    if (e.target === e.currentTarget) {
      togleLogin();
    }
  };

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <div className="loginBackground" onClick={closeModal}>
      <div className="logIn">
        <div className="mainTitle">300</div>
        <LoginInput isLoginMode={isLoginMode} />
        <button className="cancelBtn" onClick={togleLogin}>
          닫기
        </button>
        <p className="cursor" onClick={popSignup}>
          {isLoginMode
            ? '이미 가입하셨나요? 로그인'
            : '계정이 없으신가요? 회원가입'}
        </p>
      </div>
    </div>
  );
};

export default Login;
