import React, { useState } from 'react';
import './UserInfo.scss';
import DeleteId from './DeleteId/DeleteId';

const UserInfo = ({ info }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="userInfo">
      {info?.data?.length > 0 && (
        <>
          <p className="userNameTitle">
            {info.data.map(data => data.name)}님, 반가워요!
          </p>
          <div className="userInfoContainer">
            <div className="userInfoDetail">
              <p className="userNameEmail">
                ID : {info.data.map(data => data.username)}
              </p>
              <p className="nameContactBirth">
                전화번호 : {info.data.map(data => data.contact)}
              </p>
              <p className="nameContactBirth">
                생년월일 : {info.data.map(data => data.birth.slice(0, 10))}
              </p>
              <ol className="userOption">
                <li className="userInfoChange">회원정보 변경</li>
                <li className="userInfoDelete" onClick={openModal}>
                  회원 탈퇴
                </li>
              </ol>
            </div>

            <div className="userPointSection">
              <div className="subContainer">
                <div className="subFirst">
                  <span className="userRank">VIP</span>
                  <span className="userNameIn">
                    {info.data.map(data => data.name)}님
                  </span>
                </div>
                <div className="point">
                  마이포인트: {info.data.map(data => data.point)}
                </div>
              </div>
            </div>
            {showModal && <DeleteId setShowModal={setShowModal} />}
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
