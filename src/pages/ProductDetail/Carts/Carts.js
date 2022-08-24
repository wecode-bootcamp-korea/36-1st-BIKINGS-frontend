import React from 'react';
import './Carts.scss';

const Carts = ({ getData, setShowModal, setProductData, closeModal }) => {
  const { id, name, price } = getData[0];

  const postInfo = () => {
    fetch(`http://10.58.1.132:8000/carts/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMUBnbWFpbC5jb20iLCJpZCI6MSwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZSIsImlhdCI6MTY2MTMyNjU4MH0.lGtjlP5qVZKd-4q23ZpqstdmJM5xGY4SlRnQXzMptMQ',
      },
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
