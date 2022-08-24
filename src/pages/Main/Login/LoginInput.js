import React, { useState } from 'react';
import './LoginInput.scss';

const LoginInput = ({ isLoginMode }) => {
  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
    contact: '',
    birth: '',
    name: '',
    address: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const loginSignUp = (e, urlSignUp, urlLogin) => {
    e.preventDefault();
    urlSignUp = 'http://10.58.1.132:8000/users/signup';
    urlLogin = 'http://10.58.1.132:8000/users/login';

    fetch(`${isLoginMode ? urlSignUp : urlLogin}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: `${
        isLoginMode
          ? JSON.stringify({
              username: inputValues.username,
              password: inputValues.password,
              name: inputValues.name,
              birth: Number(inputValues.birth),
              contact: inputValues.contact,
              address: inputValues.address,
            })
          : JSON.stringify({
              username: inputValues.username,
              password: inputValues.password,
            })
      }`,
    })
      .then(response => response.json())
      .then(data => {
        if (!isLoginMode) localStorage.setItem('Token', String(data.TOKEN));
      });
  };

  const birthValidation = _inputBirth => {
    let Birth_exp = /^(\(?\+?[0-9]*\)?)?[0-9_\- ]*$/;
    let year = Number(_inputBirth.substring(0, 4));
    let month = Number(_inputBirth.substring(4, 6));
    let day = Number(_inputBirth.substring(6, 8));
    let today = new Date();
    let yearNow = today.getFullYear();

    if (_inputBirth === undefined) {
      return false;
    } else if (_inputBirth.length !== 8 || !Birth_exp.test(_inputBirth)) {
      return false;
    } else if (1900 > year || year > yearNow) {
      return false;
    } else if (month < 1 || month > 12) {
      return false;
    } else if (day < 1 || day > 31) {
      return false;
    } else if (
      (month === 4 || month === 6 || month === 9 || month === 11) &&
      day === 31
    ) {
      return false;
    } else if (month === 2) {
      const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
      if (day > 29 || (day === 29 && !leapYear)) {
        return false;
      }
    }
    return true;
  };

  const InputValueSignup =
    inputValues.username.includes('@') &&
    inputValues.password.length >= 4 &&
    inputValues.password.length <= 10 &&
    inputValues.name.length > 2 &&
    birthValidation(inputValues.birth) &&
    inputValues.contact.length >= 10 &&
    inputValues.address.length >= 12;

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
          <input
            name="address"
            onChange={handleInput}
            type="text"
            placeholder="주소"
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
export default LoginInput;
