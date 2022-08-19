import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginInput.scss';

const LoginInput = ({ isLoginMode }) => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
    contact: '',
    birth: '',
    name: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const login = e => {
    e.preventDefault();
    fetch('http://10.58.0.71:3000/users/withrowal', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        username: inputValues.username,
        password: inputValues.password,
        name: inputValues.name,
        birth: Number(inputValues.birth),
        contact: inputValues.contact,
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('Token', String(data.TOKEN));
        navigate('/main-bosung');
      });
  };
  const signUp = e => {
    e.preventDefault();
    fetch('http://10.58.0.71:3000/users/signup', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: inputValues.username,
        password: inputValues.password,
        name: inputValues.name,
        birth: Number(inputValues.birth),
        contact: inputValues.contact,
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('Token', data.authorization);
        navigate('/');
      });
  };

  const InputValueSignup =
    inputValues.username.includes('@') &&
    inputValues.password.length >= 5 &&
    inputValues.name.length > 2 &&
    inputValues.birth.length >= 8 &&
    inputValues.contact.length >= 10;

  const InputValueLogin =
    inputValues.username.includes('@') && inputValues.password.length >= 5;

  return (
    <form className="inputAndButton">
      <input
        className="inputIdPw"
        name="username"
        onChange={handleInput}
        type="text"
        placeholder="전화번호,사용자 이름 또는 이메일"
      />
      <input
        className="inputIdPw"
        name="password"
        onChange={handleInput}
        type="password"
        placeholder="비밀번호"
      />
      {isLoginMode && (
        <>
          <input
            name="name"
            onChange={handleInput}
            type="text"
            placeholder="이름"
          />
          <input
            name="birth"
            onChange={handleInput}
            type="text"
            placeholder="생년월일"
          />
          <input
            name="contact"
            onChange={handleInput}
            type="text"
            placeholder="전화번호"
          />
        </>
      )}

      <button
        className="loginSignupButton"
        disabled={isLoginMode ? !InputValueSignup : !InputValueLogin}
        onClick={isLoginMode ? signUp : login}
      >
        <strong>{isLoginMode ? '회원가입' : '로그인'}</strong>
      </button>
    </form>
  );
};

export default LoginInput;
