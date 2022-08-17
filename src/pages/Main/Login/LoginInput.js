import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginInput.scss';

const LoginInput = ({ replace, buttonChange }) => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    id: '',
    password: '',
    phone: '',
    birth: '',
    name: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const login = e => {
    e.preventDefault();
    fetch('', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: inputValues.id,
        password: inputValues.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('Token', data.accessToken);
        navigate('/main-bosung');
      });
  };
  const signUp = e => {
    e.preventDefault();
    fetch('', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: inputValues.id,
        password: inputValues.password,
      }),
    })
      .then(response => response.json())
      .then(data => {});
  };

  const InputValueLoginSignup =
    inputValues.id.includes('@') &&
    inputValues.password.length >= 5 &&
    inputValues.name.length >= 2 &&
    inputValues.birth.length >= 8 &&
    inputValues.phone.length >= 10; // 유효성 검사 미정
  //if 문 활용하여 alert 아이디 입력 하세요, 비밀번호 입력하세요... 등 구현

  return (
    <form className="inputAndButton">
      <input
        className="inputIdPw"
        name="id"
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
      {replace && (
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
            name="phone"
            onChange={handleInput}
            type="text"
            placeholder="전화번호"
          />
        </>
      )}

      <button
        className="loginSignupButton"
        disabled={!InputValueLoginSignup}
        onClick={login}
      >
        {buttonChange ? <strong>회원가입</strong> : <strong>로그인</strong>}
      </button>
    </form>
  );
};

export default LoginInput;
