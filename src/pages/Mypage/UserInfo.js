import React, { useState } from 'react';
import './UserInfo.scss';
import DeleteId from './DeleteId';

const UserInfo = ({ info }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="userInfo">
      <p>{info.name}님, 반가워요!</p>
      <div className="userInfoContainer">
        <div className="userInfoDetail">
          <p className="id">ID : {info.username} </p>
          {/* <div className="nameContactBirth">이름 : {info.name}</div> */}
          <p className="nameContactBirth">전화번호 : {info.contact}</p>
          <p className="nameContactBirth">생년월일 : {info.birth}</p>
          <ol className="userOption">
            <li className="userInfoChange">회원정보 변경</li>
            <li className="userInfoDelete" onClick={openModal}>
              회원 탈퇴
            </li>
          </ol>
        </div>

        <img
          className="bikeMyPage"
          alt="bikeMyPage"
          src="images/paul-green-gOHfFgwyDNM-unsplash.jpg"
        />
        {showModal && <DeleteId setShowModal={setShowModal} />}
      </div>
    </div>
  );
};

export default UserInfo;
