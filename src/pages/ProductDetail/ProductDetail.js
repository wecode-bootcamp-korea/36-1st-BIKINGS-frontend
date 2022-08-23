import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tags from './Tags/Tags';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    fetch(`http://10.58.1.154:3000/products/${userId}`)
      .then(response => response.json())
      .then(result => setData(result));
  }, [userId]);

  return (
    <div className="productDetail">
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
            <i class="fa-brands fa-instagram icon" />
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
