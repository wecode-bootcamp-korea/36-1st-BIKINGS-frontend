import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DeleteId.scss';

const DeleteId = ({ setShowModal }) => {
  const navigate = useNavigate();

  const closeModal = () => {
    setShowModal(false);
  };

  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const Delete = e => {
    e.preventDefault();
    fetch('http://10.58.0.71:3000/users/signup', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: inputValues.username,
        password: inputValues.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('Token', data.authorization);
        navigate('/'); //경로지정은 메인으로
      });
  };

  const InputValueDelete =
    inputValues.username.includes('@') && inputValues.password.length >= 5;

  return (
    <div className="deleteAll">
      <div className="mainTitle">
        그동안 삼백리 자전거를 이용해주셔서 감사합니다
      </div>

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

        <button
          className="loginSignupButton"
          disabled={!InputValueDelete}
          onClick={Delete}
        >
          <strong>{InputValueDelete}회원탈퇴</strong>
          {/* 메인페이지로 이동 */}
        </button>
      </form>
      <div className="backToMyPage" onClick={closeModal}>
        마이페이지로 돌아가기
      </div>
      {/* 마이페이지로 이동 */}
    </div>
  );
};

export default DeleteId;
