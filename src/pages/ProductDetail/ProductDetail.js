import React, { useEffect, useState } from 'react';
import Carts from './Carts/Carts';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState([]);
  const closeModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    fetch('./data/data.json')
      .then(response => response.json())
      .then(result => setProductData(result));
  }, []);
  console.log(productData);

  return (
    <div className="productDetail">
      {showModal && <Carts setShowModal={setShowModal} />}
      <button onClick={closeModal} className="cartsBtn" type="button">
        <img className="cartsImg" src="/images/카트.png" alt="cart" />
      </button>
    </div>
  );
};

export default ProductDetail;
