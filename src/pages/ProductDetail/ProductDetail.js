import React, { useState } from 'react';
import Basket from './Basket/Basket';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="productDetail">
      {showModal ? <Basket setShowModal={setShowModal} /> : null}
      <button
        onClick={() => setShowModal(true)}
        className="basketBtn"
        type="button"
      >
        <img className="basketImg" src="/images/카트.png" alt="cart" />
      </button>
    </div>
  );
};

export default ProductDetail;
