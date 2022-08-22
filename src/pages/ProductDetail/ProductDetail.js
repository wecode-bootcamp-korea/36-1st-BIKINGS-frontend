import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';
import Tags from './Tags/Tags';

const ProductDetail = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setData(result));
  }, [userId]);
  // useEffect 쓴 이유 안썼을때 무한으로 받아져서
  // const tagData = data.map(data => data.tags);
  // console.log(tagData);

  //useParams를 쓰면 state를 못받아오는 현상
  return (
    <div className="productDetail">
      <div className="bigTitle">
        <h1>{data.map(data => data.name)}</h1>
      </div>
      <div className="priceSection">
        <strong className="price">
          <span className="recommendPrice">권장소비자가격</span>
          {data.map(data => Number(data.price).toLocaleString()) + '원'}
        </strong>
        <ul className="hashTagContainer">
          {data.map((data, idx) => (
            <Tags key={idx} data={data} />
          ))}
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
        <img src={data.map(data => data.detail_image_url)} alt="images" />
      </div>
    </div>
  );
};

export default ProductDetail;
