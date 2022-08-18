import React from 'react';
import './BasketContent.scss';

const BasketContent = ({ name, src, price }) => {
  return (
    <div className="BasketContent">
      <input type="checkbox" />
      <img src={src} alt="basketContent" />
      <div className="contentInfo">
        <div className="contentName">{name}</div>
        <div className="contentPrice">{price}원</div>
      </div>
      <div className="deleteContent">x</div>
    </div>
  );
};

export default BasketContent;
