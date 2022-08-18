import React from 'react';
import Basket from './Basket/Basket';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <Basket />
      <div className="basketBtn">
        <img className="basketImg" src="/images/카트.png" alt="cart" />
      </div>
    </div>
  );
};

export default ProductDetail;
