import React from 'react';
import './PriceContent.scss';

const PriceContent = ({
  prices: { product_name, product_cover_image_url, product_price },
  onCheckedElement,
  deleteContent,
  checked,
}) => {
  return (
    <div className="priceContent">
      <input
        type="checkbox"
        onClick={onCheckedElement}
        value={product_price}
        checked={checked}
        onChange={e => {
          onCheckedElement(e);
        }}
      />
      <img src={product_cover_image_url} alt="priceContent" />
      <div className="contentInfo">
        <div className="contentName">{product_name}</div>
        <div className="contentPrice">
          {Number(product_price).toLocaleString() + '원'}
        </div>
      </div>
      <div className="deleteContent" onClick={deleteContent}>
        x
      </div>
    </div>
  );
};

export default PriceContent;
