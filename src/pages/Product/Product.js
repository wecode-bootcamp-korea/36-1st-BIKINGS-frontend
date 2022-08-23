import React, { useEffect, useState } from 'react';
import BycleInfo from './BycleInfo/BycleInfo';
import ProductCheackList from './ProductCheckList/ProductCheackList';
import { image } from '../../Function';
import './Product.scss';

const Product = () => {
  const [isShowImage, setIsShowImage] = useState(false);
  const [bycles, setbycles] = useState([]);
  const [tagId, setTagId] = useState(11);
  const [offset, setOffset] = useState(0);

  const changeImage = () => {
    setIsShowImage(isShowImage => !isShowImage);
  };

  useEffect(() => {
    fetch(`http://10.58.1.154:3000/products/?limit=${6}&offset=${offset}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setbycles(res))
      .catch(rej => alert(rej));
  }, [offset]);

  const movePage = pageNum => {
    setOffset((pageNum - 1) * 6);
  };

  const serach = id => {
    setTagId(String(id));
    fetch(`http://10.58.1.154:3000/tags/${tagId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setbycles(res.getProductsByTags))
      .catch(rej => alert(rej));
  };

  return (
    <div className="product">
      <div className="productImgBox">
        <img
          className="showProductImg"
          src={image('ProductTopImg')}
          alt="productImg"
        />
        {isShowImage && (
          <div className="productText">
            <h3>전기자전거</h3>
            <p>
              전기모터의 힘을 더하여, 적은 힘으로도 편하게 주행할 수 있는 자전거
            </p>
          </div>
        )}
      </div>
      <div className={isShowImage ? 'productBody' : 'productBody active'}>
        <div className="imageSeemore" onClick={changeImage}>
          {isShowImage ? '접기 ' : '더보기'}
        </div>
        <ProductCheackList serach={serach} />
        <div className="bycleContainer">
          <div className="bycleTitle">
            <h2> Title </h2>
            <div className="line" />
          </div>
          <div className="bycleList">
            {bycles.map(bycle => (
              <BycleInfo key={bycle.id} bycle={bycle} />
            ))}
          </div>
          <div className="movePageBtn">
            <button className="pageBtn" onClick={() => movePage(1)}>
              1
            </button>
            <button className="pageBtn" onClick={() => movePage(2)}>
              2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
