import React, { useState } from 'react';
import { InputValueSignup } from '../../../Function';
import Modal from '../../../components/Modal/Modal';
import { useNavigate } from 'react-router';
import './LoginInput.scss';

const LoginInput = ({ isLoginMode, togleLogin, setreplace }) => {
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
    <div className="inputAndButton">
      <input
        className="inputIdPw"
        name="username"
        onChange={handleInput}
        type="text"
        placeholder="????????????,????????? ?????? ?????? ?????????"
      />
      <input
        className="inputIdPw"
        name="password"
        onChange={handleInput}
        type="password"
        placeholder="????????????"
      />
      {isLoginMode && (
        <>
          <input
            name="name"
            onChange={handleInput}
            type="text"
            placeholder="??????"
          />
          <input
            name="birth"
            onChange={handleInput}
            type="text"
            placeholder="????????????"
          />
          <input
            name="contact"
            onChange={handleInput}
            type="text"
            placeholder="????????????"
          />
          <input
            name="address"
            onChange={handleInput}
            type="text"
            placeholder="??????"
          />
        </>
      )}

      <button
        className="loginSignupButton"
        disabled={
          isLoginMode ? !InputValueSignup(inputValues) : !InputValueLogin
        }
        onClick={isLoginMode ? () => setreplace(false) : loginSignUp}
      >
        <strong>{isLoginMode ? '????????????' : '?????????'}</strong>
      </button>
      {isShowModal && (
        <Modal
          content="????????? ?????? ??????????????? ???????????????."
          togleModal={togleModal}
          propsFuntion={togleModal}
        />
      )}
    </div>
  );
};
export default LoginInput;
