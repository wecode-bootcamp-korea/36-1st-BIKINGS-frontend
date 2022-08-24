import React, { useState, useEffect } from 'react';
import PriceContent from './PriceContent';
import { fetchData, deleteData } from '../../config';
import Modal from '../../components/Modal/Modal';
import './Price.scss';

const Price = () => {
  const [checkedList, setCheckedList] = useState([]);
  const [priceList, setPriceList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const togleModal = () => {
    setShowModal(showModal => !showModal);
  };

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
      ? setCheckedList([...checkedList, e.target.value])
      : setCheckedList(
          checkedList.filter(element => element !== e.target.value)
        );
  };

  useEffect(() => {
    fetchData(`http://10.58.1.132:8000/carts/cart`, setPriceList);
  }, []);

  const deleteContent = id => {
    deleteData(
      `http://10.58.1.132:8000/carts/withrawal/product`,
      { productId: id },
      setPriceList(priceList.filter(el => el.id !== id))
    );
  };

  const setPricetoNumber = checkedList.map(checkedListToNumber =>
    Number(checkedListToNumber)
  );

  const addPrice = setPricetoNumber.reduce((a, b) => a + b, 0);

  const sale = addPrice / 10;

  const totalPrice = addPrice === 0 ? 0 : addPrice - sale + 5000;

  return (
    <main className="price">
      <article className="priceBox">
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
            <ul className="priceInfo">
              <li className="totalBox">
                <p>상품금액</p>
                <p>{addPrice.toLocaleString() + '원'}</p>
              </li>
              <li className="totalBox">
                <p>상품할인금액</p>
                <p>{sale.toLocaleString() + '원'}</p>
              </li>
              <li className="totalBox">
                <p>배송비</p>
                <p>5000 원</p>
              </li>
              <li className="totalBox">
                <p>결제예정금액</p>
                <p>{totalPrice.toLocaleString() + '원'}</p>
              </li>
            </ul>
            <button className="priceBtn" onClick={togleModal}>
              주문하기
            </button>
            {showModal && (
              <Modal togleModal={togleModal} content="주문하시곘습니까?" />
            )}
            <div className="footer">
              <p>[주문완료] 상태일경우에만 주문취소 할수있습니다.</p>
              <p>[배송중] 상태일 경우에는 취소가 불가능 합니다.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Price;
