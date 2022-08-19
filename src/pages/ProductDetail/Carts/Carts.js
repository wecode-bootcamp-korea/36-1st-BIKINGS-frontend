import React from 'react';
import './Carts.scss';

const Carts = ({ setShowModal }) => {
  return (
    <div className="carts">
      <div className="cartsContainer">
        <div className="firstBasket">
          <p>오던세 라고아 2인조 13피스</p>
          <p className="subDes">적립제외상품</p>
          <span className="price">149,250</span>
          <span className="subPrice">199,250</span>
        </div>
        <div className="secondBasket">
          <p>합계</p>
          <span className="bigPrice">149,250원</span>
        </div>
        <div className="secondAndHalfBasket">
          <span className="secondBtn">적립</span>
          <span className="">로그인 후, 회원할인가 제공</span>
        </div>
        <div className="thirdBasket">
          <button onClick={() => setShowModal(false)} className="cancelBtn">
            취소
          </button>
          <button onClick={() => setShowModal(false)} className="selectBtn">
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
