import React from 'react';
import './PriceContent.scss';

const PriceContent = ({
  prices: { name, src, price },
  onCheckedElement,
  checked,
}) => {
  return (
    <div className="priceContent">
      <input
        type="checkbox"
        onClick={onCheckedElement}
        value={price}
        checked={checked}
        onChange={e => {
          onCheckedElement();
        }}
      />
      <img src={src} alt="priceContent" />
      <div className="contentInfo">
        <div className="contentName">{name}</div>
        <div className="contentPrice">{price}원</div>
      </div>
      <div className="deleteContent">x</div>
    </div>
  );
};

export default PriceContent;
