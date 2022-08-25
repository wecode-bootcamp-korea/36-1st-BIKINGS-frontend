import React, { useState } from 'react';
import './Login.scss';
import LoginInput from './LoginInput';

const Login = ({ togleLogin }) => {
  const [isLoginMode, setreplace] = useState(false);

  const popSignup = () => {
    setreplace(isLoginMode => !isLoginMode);
  };

  return (
    <div className="loginBackground">
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
