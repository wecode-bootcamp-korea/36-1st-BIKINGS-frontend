import React, { useState } from 'react';
import './UserInfo.scss';
import DeleteId from './DeleteId';

const UserInfo = ({ info }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="userInfo">
        <div className="id">ID : {info.username} </div>
        <div className="name">이름 : {info.name}</div>
        <div className="contact">전화번호 : {info.contact}</div>
        <div className="birth">생년월일 : {info.birth}</div>
      </div>
      <ol className="userOption">
        <li className="userInfoChange">회원정보 변경</li>
        <li className="userInfoDelete" onClick={openModal}>
          회원 탈퇴
        </li>
      </ol>
      <img
        className="bikeMyPage"
        alt="bikeMyPage"
        src="images/paul-green-gOHfFgwyDNM-unsplash.jpg"
      />
      {showModal && <DeleteId setShowModal={setShowModal} />}
    </>
  );
};

export default UserInfo;
