import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [data, setData] = useState([]);

  console.log(data);
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setData(result));
  }, [userId]);

  // useEffect 쓴 이유 안썼을때 무한으로 받아져서

  //useParams를 쓰면 state를 못받아오는 현상
  return (
    <div className="productDetail">
      <div className="bigTitle">
        <h1>{data.map(data => data.name)}</h1>
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
