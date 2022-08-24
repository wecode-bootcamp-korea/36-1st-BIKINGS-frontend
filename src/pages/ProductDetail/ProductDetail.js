import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Carts from './Carts/Carts';
import { getDataClickBtn } from '../../config';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState([]);
  const [getData, setGetData] = useState([]);
  const params = useParams();
  const userId = params.id;

  const closeModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    getDataClickBtn(`http://10.58.1.154:3000/products/${userId}`, setGetData);
  }, [userId]);

  return (
    <div className="productDetail">
      {showModal && (
        <Carts
          setShowModal={setShowModal}
          setProductData={setProductData}
          getData={getData}
          productData={productData}
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
