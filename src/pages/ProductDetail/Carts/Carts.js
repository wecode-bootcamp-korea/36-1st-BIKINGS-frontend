import React, { useEffect } from 'react';
import './Carts.scss';

const Carts = ({ getData, setShowModal, setProductData, closeModal }) => {
  const { id, name, price } = getData[0];

  const postInfo = () => {
    fetch(`http://10.58.1.132:8000/carts/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMkBnbWFpbC5jb20iLCJpZCI6MiwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZTIiLCJpYXQiOjE2NjEzODgwMDZ9.sSUjlL9ErJop8XYPRU-yGtwbsQbQkA3QieZ8tk0Mtcc',
      },
    });
  };

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <div className="carts">
      <div className="cartsSubContainer">
        <div className="cartsInnerContainer">
          <div className="firstBasket">
            <p className="cartsTitle">{name}</p>
            <p className="subDes" />
            <span className="price">
              {Number(price).toLocaleString() + '원'}
              <span className="subPrice">
                {Number(price * 1.1).toLocaleString() + '원'}
              </span>
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
  );
};

export default Carts;
