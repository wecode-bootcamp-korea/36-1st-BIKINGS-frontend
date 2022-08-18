import React from 'react';
import { image } from '../../Function';
import './Basket.scss';
import BasketContent from './BasketContent';

const Basket = () => {
  return (
    <div className="Basket">
      <div className="basketPrice">
        <h3>장바구니</h3>
        <div className="basketList">
          <div className="basketSelect">
            <input type="checkbox" />
            <span> 전체선택 </span>
            <span> l </span>
            <span> 선택삭제 </span>
          </div>
          <div className="line" />
          {Basket_Data.map(baskets => (
            <BasketContent
              key={baskets.id}
              name={baskets.name}
              price={baskets.price}
              src={baskets.src}
            />
          ))}
          <div className="priceInfo">
            <div className="totalBox">
              <div className="priceTotal"> 2222원 </div>
              <button className="priceBtn"> 주문하기 </button>
            </div>
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

export default Basket;

const Basket_Data = [
  {
    id: 1,
    name: '자전거',
    price: '1.312.213',
    src: image('test'),
  },
  {
    id: 2,
    name: '자전거2',
    price: '1.312.213',
    src: image('test'),
  },
  {
    id: 3,
    name: '자전거3',
    price: '211.312.213',
    src: image('test'),
  },
  {
    id: 4,
    name: '자전거4',
    price: '312.213',
    src: image('test'),
  },
];
