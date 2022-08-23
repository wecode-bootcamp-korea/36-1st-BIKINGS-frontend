import React from 'react';
import './Carts.scss';

const Carts = ({ setShowModal, productData }) => {
  const { name, price } = productData;

  return (
    <div className="carts">
      <div className="carsContainer">
        <div className="cartsSubContainer">
          <div className="cartsInnerContainer">
            <div className="firstBasket">
              <p>{name}</p>
              <p className="subDes" />
              <span className="price">
                {Number(price).toLocaleString() + '원'}
              </span>
              <span className="subPrice">
                {Number(price * 1.1).toLocaleString() + '원'}
              </span>
            </div>
            <div className="secondBasket">
              <p>합계</p>
              <span className="bigPrice">
                {Number(price).toLocaleString() + '원'}
              </span>
            </div>
            <div className="secondAndHalfBasket">
              <span className="">10% 할인가 적용</span>
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
      </div>
    </div>
  );
};

export default Carts;
