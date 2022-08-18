import React from 'react';
import './PriceContent.scss';

const priceContent = ({ name, src, price }) => {
  return (
    <div className="priceContent">
      <input type="checkbox" />
      <img src={src} alt="priceContent" />
      <div className="contentInfo">
        <div className="contentName">{name}</div>
        <div className="contentPrice">{price}원</div>
      </div>
      <div className="deleteContent">x</div>
    </div>
  );
};

export default priceContent;
