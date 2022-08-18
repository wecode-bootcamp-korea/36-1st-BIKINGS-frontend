import React from 'react';
import { image } from '../../Function';
import './Price.scss';
import PriceContent from './PriceContent';

const price = () => {
  const addPrice = price_Data.reduce((accumulator, currentObject) => {
    return accumulator + currentObject.price;
  }, 0);

  const sale = addPrice / 10;

  const result = addPrice - sale + 5000;

  return (
    <div className="price">
      <div className="priceBox">
        <h3>장바구니</h3>
        <div className="priceList">
          <div className="priceSelectBox">
            <div className="priceOptionSelect">
              <input type="checkbox" />
              <span> 전체선택 </span>
              <span> l </span>
              <span> 선택삭제 </span>
            </div>
            <div className="line" />
            {price_Data.map(prices => (
              <PriceContent
                key={prices.id}
                name={prices.name}
                price={prices.price}
                src={prices.src}
              />
            ))}
            <div className="line" />
          </div>
          <div className="priceFinalCheck">
            <div className="priceInfo">
              <div className="totalBox">
                <p>상품금액</p>
                <p>{addPrice} 원</p>
              </div>
              <div className="totalBox">
                <p>상품할인금액</p>
                <p>{sale} 원</p>
              </div>
              <div className="totalBox">
                <p>배송비</p>
                <p>5000 원</p>
              </div>
              <div className="totalBox">
                <p>결제예정금액</p>
                <p>{result} 원</p>
              </div>
            </div>
            <button className="priceBtn"> 주문하기 </button>
            <div className="Footer">
              <p>[주문완료] 상태일경우에만 주문취소 할수있습니다.</p>
              <p>[배송중] 상태일 경우에는 곤란.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default price;

const price_Data = [
  {
    id: 1,
    name: '자전거',
    price: 130000,
    src: image('test'),
  },
  {
    id: 2,
    name: '자전거2',
    price: 120000,
    src: image('test'),
  },
  {
    id: 3,
    name: '자전거3',
    price: 210000,
    src: image('test'),
  },
  {
    id: 4,
    name: '자전거4',
    price: 312000,
    src: image('test'),
  },
];
