import React, { useState, useEffect } from 'react';
import PriceContent from './PriceContent';
import './Price.scss';

const Price = () => {
  const [checkedList, setCheckedList] = useState([]);
  const [priceList, setPriceList] = useState([]);

  const handleAllCheck = e => {
    if (e.target.checked) {
      const idArray = [];
      priceList.forEach(el => idArray.push(el.price));
      setCheckedList(idArray);
    } else {
      setCheckedList([]);
    }
  };

  const onCheckedElement = e => {
    e.target.checked
      ? setCheckedList([...checkedList, Number(e.target.value)])
      : setCheckedList(
          checkedList.filter(element => element !== Number(e.target.value))
        );
  };

  useEffect(() => {
    fetch(`/data/priceData.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setPriceList(res));
  }, []);

  const deleteContent = id => {
    setPriceList(priceList.filter(el => el.id !== id));
  };

  const setPricetoNumber = checkedList.map(checkedListToNumber =>
    Number(checkedListToNumber)
  );

  const addPrice = setPricetoNumber.reduce((a, b) => a + b, 0);

  const sale = addPrice / 10;

  const totalPrice = addPrice === 0 ? 0 : addPrice - sale + 5000;

  return (
    <div className="price">
      <div className="priceBox">
        <h3>장바구니</h3>
        <div className="priceList">
          <div className="priceSelectBox">
            <div className="priceOptionSelect">
              <input
                type="checkbox"
                onChange={e => handleAllCheck(e)}
                checked={checkedList.length === priceList.length ? true : false}
              />
              <span className="setCheckBox">전체선택</span>
              <span> ㅣ </span>
              <span className="setCheckBox"> 선택삭제 </span>
            </div>
            <div className="line" />
            {priceList.map(prices => (
              <PriceContent
                key={prices.id}
                prices={prices}
                onCheckedElement={onCheckedElement}
                checkedList={checkedList}
                checked={checkedList.includes(prices.price) ? true : false}
                deleteContent={() => deleteContent(prices.id)}
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
                <p>{totalPrice} 원</p>
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

export default Price;
