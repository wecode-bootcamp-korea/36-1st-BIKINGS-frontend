import React, { useEffect, useState } from 'react';
import BycleInfo from './BycleInfo/BycleInfo';
import ProductCheackList from './ProductCheckList/ProductCheackList';
import { useSearchParams } from 'react-router-dom';
import { image } from '../../Function';
import './Product.scss';

const Product = () => {
  const [isShowImage, setIsShowImage] = useState(false);

  const changeImage = () => {
    setIsShowImage(!isShowImage);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  const movePage = pageNumber => {
    searchParams.set('offset', (pageNumber - 1) * 6);
    setSearchParams(searchParams);
  };

  const [bycle, setbycle] = useState([]);

  useEffect(() => {
    fetch(`/data/data.json?limit=${limit}&start=${offset}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setbycle(data));
  }, [offset, limit]);

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
            {bycle.map(bycle => (
              <BycleInfo key={bycle.id} bycle={bycle} />
            ))}
          </div>
          <div>
            <button onClick={() => movePage(1)}>1</button>
            <button onClick={() => movePage(2)}>2</button>
            <button onClick={() => movePage(3)}>3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
