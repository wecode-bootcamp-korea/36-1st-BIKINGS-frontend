import React, { useEffect, useState } from 'react';
import BycleInfo from './BycleInfo/BycleInfo';
import ProductCheackList from './ProductCheckList/ProductCheackList';
import { image } from '../../Function';
import './Product.scss';

const Product = () => {
  const [isShowImage, setIsShowImage] = useState(false);
  const [bycles, setbycles] = useState([]);
  const [page, setPage] = useState(1);

  const changeImage = () => {
    setIsShowImage(isShowImage => !isShowImage);
  };

  useEffect(() => {
    fetch(`http://10.58.0.127:3000/products/covers/${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setbycles(res))
      .catch(rej => alert(rej));
  }, [page]);

  const movePage = pageNum => {
    setPage(pageNum);
  };

  return (
    <div className="product">
      <div className="productImgBox">
        <img
          className={isShowImage ? 'showProductImg' : 'closeProductImg'}
          src={image('testImg')}
          alt="productImg"
        />
        {isShowImage && (
          <div className="productText">
            <h3>전기자전거</h3>
            <p>
              전기모터의 힘을 더하여, 적은 힘으로도 편하게 주행할 수 있는 자전거
            </p>
            <button> 제품 자세히 </button>
          </div>
        )}
      </div>
      <div className="productBody">
        <div className="imageSeemore" onClick={changeImage}>
          {isShowImage ? '접기 ' : '더보기'}
        </div>
        <ProductCheackList />
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
          <div>
            <button onClick={() => movePage(1)}>1</button>
            <button onClick={() => movePage(2)}>2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
