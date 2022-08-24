import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
// import { useNavigate } from 'react-router-dom';
import './DeleteId.scss';

const DeleteId = ({ setShowModal }) => {
  // const navigate = useNavigate();

  const [isShowModal, setIsShowModal] = useState(false);

  const togleModal = () => {
    setIsShowModal(togleModal => !togleModal);
  };

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
    fetch('http://10.58.1.132:8000/users/withrowal', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMjBAZ21haWwuY29tIiwiaWQiOjI1LCJiaXJ0aCI6IjE5ODktMTItMzFUMTU6MDA6MDAuMDAwWiIsImNvbnRhY3QiOiIwMTAtNTU1NS00NDQ0IiwicG9pbnQiOjEwMDAwMDAwLCJuYW1lIjoia2ZrIiwiaWF0IjoxNjYxMjM3OTUzfQ.ip2Vqy38bkmd0W_jWW6Z2HD9iuHxiaRc-zdqKFr6ycc',
      },
      body: JSON.stringify({
        username: inputValues.username,
        password: inputValues.password,
      }),
    })
      .then(response => response.json())
      // .then(data => {
      //   navigate('/main'); //회원정보 삭제 후 경로지정은 메인으로
      // });
      .catch(setIsShowModal(true));
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
        {isShowModal && (
          <Modal
            content="아이디 또는 비밀번호가 틀렸습니다."
            togleModal={togleModal}
            propsFuntion={togleModal}
          />
        )}
      </form>
      <div className="backToMyPage" onClick={closeModal}>
        마이페이지로 돌아가기
      </div>
      {/* 마이페이지로 이동 */}
    </div>
  );
};

export default DeleteId;
