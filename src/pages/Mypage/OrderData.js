import React from 'react';
import './OrderData.scss';

const OrderData = ({ order }) => {
  return (
    <div className="orderDataInfo">
      <div>{order.date}</div>
      <div>{order.product}</div>
      <div>{order.quantity}</div>
      <div>{order.price}</div>
    </div>
  );
};

export default OrderData;
