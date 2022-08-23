import React from 'react';
import './Carts.scss';

const Carts = ({ setShowModal, back, setProductData, closeModal }) => {
  const { data } = back;
  const [one] = data;
  const { name, price } = one;

  const postInfo = () => {
    fetch('http://10.58.1.132:8000/carts/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMUBnbWFpbC5jb20iLCJpZCI6MSwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZSIsImlhdCI6MTY2MTIzNTAyNn0.7x9lDvoBsqge7GlvUh-GG2RD6JUQwwlZ4MHtIc158bc',
      },
      body: JSON.stringify({ productId: '1' }),
    })
      .then(response => response.json())
      .then(result => setProductData(result));
  };

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
              <button
                onClick={function () {
                  postInfo();
                  closeModal();
                }}
                className="selectBtn"
              >
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
