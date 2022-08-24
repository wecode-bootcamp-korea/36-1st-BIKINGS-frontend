import React from 'react';
import './BycleInfo.scss';

const BycleInfo = ({ bycle: { name, price, cover_image_url, tags } }) => {
  return (
    <div className="bycleInfo">
      <img className="bycleImg" src={cover_image_url} alt="bycleImg" />
      <div className="bycleContent">
        <div className="bycleName">{name}</div>
        <div className="byclePrice">
          {Number(price).toLocaleString() + '원'}
        </div>
        <div className="bycleHashtag">
          {tags.map((tag, i) => (
            <button className="hashTag" key={i}>
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BycleInfo;
