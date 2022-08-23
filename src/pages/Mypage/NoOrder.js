import React from 'react';
import './NoOrder.scss';

const NoOrder = () => {
  return (
    <>
      <img className="exclaimation" src="images/exclamation.png" alt="NoItem" />
      <div className="noItem">주문/배송 내역이 없습니다.</div>
    </>
  );
};

export default NoOrder;
