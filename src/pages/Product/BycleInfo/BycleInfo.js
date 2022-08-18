import React from 'react';
import { image } from '../../../Function';
import './BycleInfo.scss';

const BycleInfo = () => {
  return (
    <div className="bycleInfo">
      <img className="bycleImg" src={image('testImg')} alt="bycleImg" />
      <div className="bycleContent">
        <div className="bycleName">name</div>
        <div className="byclePrice">1,850,000</div>
        <div className="bycleHashtag">
          <button className="hashTag">#LifeStyle</button>
          <button className="hashTag">#Elec</button>
          <button className="hashTag">#asdjkl</button>
          <button className="hashTag">#dsd</button>
          <button className="hashTag">#LifeasdasdaStyle</button>
          <button className="hashTag">#sssss</button>
          <button className="hashTag">#Eddddlec</button>
          <button className="hashTag">#aaaaa</button>
          <button className="hashTag">#dsssssd</button>
          <button className="hashTag">#ddd</button>
        </div>
      </div>
    </div>
  );
};

export default BycleInfo;
