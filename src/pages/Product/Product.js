import React, { useState } from 'react';
import BycleInfo from './BycleInfo/BycleInfo';
import ProductCheackList from './ProductCheckList/ProductCheackList';
import { image } from '../../Function';
import './Product.scss';

const Product = () => {
  const [isShowImage, setIsShowImage] = useState(false);
  const [name, setName] = useState('closeProductImg');
  const [seeMore, setSeeMore] = useState('더보기');

  const changeImage = () => {
    setIsShowImage(!isShowImage);
    setName(name === 'closeProductImg' ? 'showProductImg' : 'closeProductImg');
    setSeeMore(seeMore === '더보기' ? '접기 ' : '더보기');
  };

  return (
    <div className="product">
      <div className="productImgBox">
        <img className={name} src={image('testImg')} alt="productImg" />
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
          {seeMore}
        </div>
        <ProductCheackList />
        <div className="bycleContainer">
          <div className="bycleTitle">
            <h2> Title </h2>
            <div className="line" />
          </div>
          <div className="bycleList">
            <BycleInfo />
            <BycleInfo />
            <BycleInfo />
            <BycleInfo />
            <BycleInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
