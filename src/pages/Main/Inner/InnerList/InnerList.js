import React from 'react';
import './InnerList.scss';

const InnerList = ({ src, name }) => {
  return (
    <li className="listCategory">
      <img className="listImage" src={src} alt="list" />
      <div className="bgBox">{name}</div>
    </li>
  );
};

export default InnerList;
