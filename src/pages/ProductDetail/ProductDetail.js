import React, { useState } from 'react';
import Carts from './Carts/Carts';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="productDetail">
      {showModal ? <Carts setShowModal={setShowModal} /> : null}
      <button
        onClick={() => setShowModal(true)}
        className="cartsBtn"
        type="button"
      >
        <img className="cartsImg" src="/images/카트.png" alt="cart" />
      </button>
    </div>
  );
};

export default ProductDetail;
