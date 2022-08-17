import React, { useState } from 'react';
import './Login.scss';
import LoginInput from './LoginInput';

const Login = () => {
  const [replace, setreplace] = useState(false);
  const [alreadyHaveId, setalreadyHaveId] = useState(false);
  const [buttonChange, setbuttonChange] = useState(false);

  const popSignup = () => {
    setreplace(!replace);
    setalreadyHaveId(!alreadyHaveId);
    setbuttonChange(!buttonChange);
  };

  return (
    <div className="loginBackground">
      <div className="logIn">
        <div className="mainTitle">300</div>
        <LoginInput replace={replace} buttonChange={buttonChange} />

        <p className="cursor" onClick={popSignup}>
          {alreadyHaveId
            ? '이미 가입하셨나요? 로그인'
            : '계정이 없으신가요? 회원가입'}
        </p>
      </div>
    </div>
  );
};

export default Login;
