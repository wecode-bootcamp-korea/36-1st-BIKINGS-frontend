import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import OrderData from './OrderData';
import NoOrder from './NoOrder';
import './Mypage.scss';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    fetch('/data/MypageMockData.json')
      .then(response => response.json())
      .then(result => setUserInfo(result));
  }, []);

  useEffect(() => {
    fetch('http://10.58.1.132:8000/carts/product/10000', {
      method: 'get',
      headers: {
        'content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMUBnbWFpbC5jb20iLCJpZCI6MSwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZSIsImlhdCI6MTY2MTI1OTEyNX0.RfTMzvDGr4T_GJAFdefbFiRo5GVM2czIchwaEnCkua0',
      },
    })
      .then(response => response.json())
      .then(result => setOrderData(result.data));
  }, []);

  return (
    <div className="myPage">
      {userInfo.map(info => {
        return <UserInfo key={info.id} info={info} />;
      })}
      <div className="recentOrder">
        <p>최근주문내역</p>
        <div className="orderInfo">
          <p>주문일자</p>
          <p>제품명</p>
          <p>수량</p>
          <p>주문금액</p>
        </div>
        {orderData.length > 0 &&
          orderData.map(order => <OrderData key={order.id} order={order} />)}
        {orderData.length === 0 && <NoOrder />}
      </div>
    </div>
  );
};

export default Mypage;
