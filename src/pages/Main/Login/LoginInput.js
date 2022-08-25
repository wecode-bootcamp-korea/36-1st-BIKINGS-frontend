import React, { useState } from 'react';
import { InputValueSignup } from '../../../Function';
import Modal from '../../../components/Modal/Modal';
import { useNavigate } from 'react-router';
import './LoginInput.scss';

const LoginInput = ({ isLoginMode, togleLogin }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
    contact: '',
    birth: '',
    name: '',
    address: '',
  });

  const navigate = useNavigate();

  const togleModal = () => {
    setIsShowModal(togleModal => !togleModal);
  };

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
      .then(response => {
        if (!response.ok) {
          setIsShowModal(true);
        } else if (response.ok) {
          togleLogin(true);
          navigate('/');
        }
        return response.json();
      })
      .then(data => {
        if (!isLoginMode) {
          localStorage.setItem('Token', data.token);
        }
      });
  };

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
        disabled={
          isLoginMode ? !InputValueSignup(inputValues) : !InputValueLogin
        }
        onClick={loginSignUp}
      >
        <strong>{isLoginMode ? '회원가입' : '로그인'}</strong>
      </button>
      {isShowModal && (
        <Modal
          content="아이디 또는 비밀번호가 틀렸습니다."
          togleModal={togleModal}
          propsFuntion={togleModal}
        />
      )}
    </form>
  );
};
export default LoginInput;
