import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo/UserInfo';
import OrderData from './OrderData/OrderData';
import './Mypage.scss';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState([{ data: [], message: '' }]);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.1.132:8000/users', {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMkBnbWFpbC5jb20iLCJpZCI6MiwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZTIiLCJpYXQiOjE2NjEzODgwMDZ9.sSUjlL9ErJop8XYPRU-yGtwbsQbQkA3QieZ8tk0Mtcc',
      },
    })
      .then(response => response.json())
      .then(result => setUserInfo(result));
  }, []);

  useEffect(() => {
    fetch('http://10.58.1.132:8000/carts/product/10000', {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMkBnbWFpbC5jb20iLCJpZCI6MiwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZTIiLCJpYXQiOjE2NjEzODgwMDZ9.sSUjlL9ErJop8XYPRU-yGtwbsQbQkA3QieZ8tk0Mtcc',
      },
    })
      .then(response => response.json())
      .then(result => setOrderData(result.data));
  }, []);
  return (
    <div className="myPage">
      <div className="nav1" />
      <UserInfo info={userInfo} />
      <div className="recentOrder">
        <p>최근주문내역</p>
        <div className="orderInfo">
          <p>주문일자</p>
          <p>제품명</p>
          <p>수량</p>
          <p>주문금액</p>
        </div>
        {orderData.length > 0 ? (
          orderData.map(order => <OrderData key={order.id} order={order} />)
        ) : (
          <>
            <img
              className="exclaimation"
              src="images/exclamation.png"
              alt="NoItem"
            />
            <div className="noItem">주문/배송 내역이 없습니다.</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Mypage;
