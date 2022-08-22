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
  // const loginSignUp = (url, method, headers, body, e) => {
  //   e.preventDefault();
  //   fetch(`http://10.58.0.71:3000/users/${url}`, {
  //     method: method,
  //     headers: headers,
  //     body: body,
  //   });
  // };

  // const a = loginSignUp(
  //   'login',
  //   'post',
  //   {
  //     'Content-Type': 'application/json',
  //     authorization: localStorage.getItem('Token'),
  //   },
  //   JSON.stringify({
  //     username: inputValues.username,
  //     password: inputValues.password,
  //   })
  // )
  //   .then(response => response.json())
  //   .then(data => {
  //     localStorage.setItem('Token', String(data.TOKEN));
  //     navigate('/Main');
  //   });

  // const login = e => {
  //   e.preventDefault();
  //   fetch('http://10.58.1.132:8000/users/login', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       authorization: localStorage.getItem('Token'),
  //     },
  //     body: JSON.stringify({
  //       username: inputValues.username,
  //       password: inputValues.password,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       localStorage.setItem('Token', String(data.TOKEN));
  //       navigate('/Main');
  //     });
  // };
  const loginSignUp = e => {
    e.preventDefault();
    fetch(
      `${
        !isLoginMode
          ? 'http://10.58.1.132:8000/users/login'
          : 'http://10.58.1.132:8000/users/signup'
      }`,
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: `${
          isLoginMode
            ? JSON.stringify({
                username: inputValues.username,
                password: inputValues.password,
              })
            : JSON.stringify({
                username: inputValues.username,
                password: inputValues.password,
                name: inputValues.name,
                birth: Number(inputValues.birth),
                contact: inputValues.contact,
              })
        }`,
      }
    )
      .then(response => response.json())
      .then(data => {
        if (isLoginMode) localStorage.setItem('Token', String(data.TOKEN));
        navigate('/Main');
      });
  };
  // localStorage.setItem('Token', data.authorization);

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
        onClick={loginSignUp}
      >
        <strong>{isLoginMode ? '회원가입' : '로그인'}</strong>
      </button>
    </form>
  );
};
// {isLoginMode ? '회원가입' : '로그인'}
export default LoginInput;
