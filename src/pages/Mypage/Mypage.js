import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import './Mypage.scss';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    fetch('/data/MypageMockData.json')
      .then(response => response.json())
      .then(result => setUserInfo(result));
  }, []);

  return (
    <div className="myPage">
      <div className="myPageHeader">마이페이지</div>
      {userInfo.map(info => {
        return <UserInfo key={info.id} info={info} />;
      })}
    </div>
  );
};

export default Mypage;
