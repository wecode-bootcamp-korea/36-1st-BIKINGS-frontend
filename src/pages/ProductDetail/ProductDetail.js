import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Carts from './Carts/Carts';
import { getDataClickBtn, getProductDetailData } from '../../config';
import Tags from './Tags/Tags';

import './ProductDetail.scss';

const ProductDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [getData, setGetData] = useState([]);
  const params = useParams();
  const userId = params.id;

  const closeModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    getProductDetailData(`http://10.58.1.154:3000/products/${userId}`, setData);
  }, [userId]);

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
      <div className="bigTitle">
        <h1>{data.length > 0 && data.map(data => data.name)}</h1>
      </div>
      <div className="priceSection">
        <strong className="price">
          <span className="recommendPrice">권장소비자가격</span>
          {data.length > 0 &&
            data.map(data => Number(data.price).toLocaleString()) + '원'}
        </strong>
        <ul className="hashTagContainer">
          {data.length > 0 &&
            data[0].tags.map((data, idx) => <Tags key={idx} tags={data} />)}
        </ul>
        <div className="snsContainer">
          <a className="sns" href="https://www.instagram.com">
            <i className="fa-brands fa-facebook-f icon" />
          </a>
          <a className="sns" href="https://www.instagram.com">
            <i className="fa-brands fa-instagram icon" />
          </a>
        </div>
      </div>

      <div className="detailImgSection">
        {data.length > 0 && (
          <img src={data.map(data => data.detail_image_url)} alt="images" />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
