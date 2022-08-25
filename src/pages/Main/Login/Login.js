import React, { useState } from 'react';
import LoginInput from './LoginInput';
import './Login.scss';

const Login = () => {
  const [isLoginMode, setreplace] = useState(false);

  const popSignup = () => {
    setreplace(isLoginMode => !isLoginMode);
  };

  return (
    <div className="loginBackground">
      <div className="logIn">
        <div className="mainTitle">300</div>
        <LoginInput isLoginMode={isLoginMode} />

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
