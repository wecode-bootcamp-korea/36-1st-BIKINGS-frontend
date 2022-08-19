import React from 'react';
import './BycleInfo.scss';

const BycleInfo = ({ bycle: { name, price, picture, hashtag } }) => {
  return (
    <div className="bycleInfo">
      <img className="bycleImg" src={picture} alt="bycleImg" />
      <div className="bycleContent">
        <div className="bycleName">{name}</div>
        <div className="byclePrice">{price}</div>
        <div className="bycleHashtag">
          {hashtag.map(aa => (
            <button className="hashTag" key={aa.id}>
              {aa.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BycleInfo;
