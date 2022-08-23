import { isCompositeType } from 'graphql';
import React, { useEffect, useState } from 'react';
import Carts from './Carts/Carts';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState([]);
  const [data, setData] = useState([]);

  const closeModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    fetch('http://10.58.1.132:8000/carts/product/2', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMUBnbWFpbC5jb20iLCJpZCI6MSwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZSIsImlhdCI6MTY2MTIzNTAyNn0.7x9lDvoBsqge7GlvUh-GG2RD6JUQwwlZ4MHtIc158bc',
      },
    })
      .then(response => response.json())
      .then(result => setData(result));
  }, []);

  return (
    <div className="productDetail">
      {showModal && (
        <Carts
          setShowModal={setShowModal}
          setProductData={setProductData}
          back={data}
          closeModal={closeModal}
        />
      )}
      <button onClick={closeModal} className="cartsBtn" type="button">
        <img className="cartsImg" src="/images/카트.png" alt="cart" />
      </button>
    </div>
  );
};

export default ProductDetail;
