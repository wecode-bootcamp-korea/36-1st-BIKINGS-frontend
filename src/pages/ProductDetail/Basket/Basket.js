import React from 'react';
import './Basket.scss';

const Basket = () => {
  return (
    <div className="basket">
      <div className="basketContainer">
        <div className="firstBasket">
          <div>오던세 라고아 2인조 13피스</div>
          <div className="subDes">적립제외상품</div>
          <span className="price">149,250</span>
          <span className="subPrice">199,250</span>
        </div>
        <div className="secondBasket">
          <span>합계</span>
          <span className="bigPrice">149,250원</span>
        </div>
        <div className="secondHalfBasket">
          <span className="secondBtn">적립</span>
          <span className="">로그인 후, 회원할인가 제공</span>
        </div>
        <div className="thirdBasket">
          <button className="btnOne">취소</button>
          <button className="btnTwo">장바구니 담기</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
