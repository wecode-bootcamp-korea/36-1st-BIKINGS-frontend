import React from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="bigTitle">
        <h1>팬텀 XC</h1>
      </div>
      <div className="priceSection">
        <strong className="price">
          <span className="recommendPrice">권장소비자가격</span>
          1,700,000원
        </strong>
        <ul className="hashTagContainer">
          <li className="hashTag">#라이플스타일</li>
          <li className="hashTag">#전기자전거</li>
          <li className="hashTag">#팬텀</li>
          <li className="hashTag">#라이플스타일</li>
          <li className="hashTag">#사이드탈착형베터리</li>
          <li className="hashTag">#이륜자전거</li>
          <li className="hashTag">#스마트모빌리티</li>
          <li className="hashTag">#이륜자전거</li>
          <li className="hashTag">#이륜자전거</li>
        </ul>
        <div className="snsContainer">
          <a className="sns" href="https://www.instagram.com">
            facebook
          </a>
          <a className="sns" href="https://www.instagram.com">
            instagram
          </a>
        </div>
      </div>

      <div className="detailImgSection">
        <img src="./images/마켓컬리.png" alt="images" />
      </div>
    </div>
  );
};

export default ProductDetail;
