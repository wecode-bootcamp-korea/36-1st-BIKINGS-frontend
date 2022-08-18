import React from 'react';
import { image } from '../../Function';
import './BycleInfo.scss';

const BycleInfo = () => {
  return (
    <div className="bycleInfo">
      <img className="bycleImg" src={image('testImg')} alt="bycleImg" />
      <div className="bycleContent">
        <div className="bycleName">name</div>
        <div className="byclePrice">1,850,000</div>
        <div className="bycleHashtag">
          <button>#LifeStyle</button>
          <button>#Elec</button>
          <button>#asdjkl</button>
          <button>#dsd</button>
          <button>#LifeasdasdaStyle</button>
          <button>#sssss</button>
          <button>#Eddddlec</button>
          <button>#aaaaa</button>
          <button>#dsssssd</button>
          <button>#ddd</button>
        </div>
      </div>
    </div>
  );
};

export default BycleInfo;
