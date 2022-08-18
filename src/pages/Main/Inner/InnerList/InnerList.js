import React from 'react';
import { Link } from 'react-router-dom';
import './InnerList.scss';

const InnerList = ({ list }) => {
  const { name, src, icon, description } = list;

  return (
    <li className="listCategory">
      <img className="listImage" src={src} alt="list" />
      <div className="bgBox">{name}</div>
      <div className="darkness">
        <div className="hoverDetail">
          <img className="hoverImg" src={icon} alt="mainImage" />
          <p className="hoverName">{name}</p>
          <p className="hoverDes">{description}</p>
          <button className="hoverBtn" type="submit">
            <Link to="/product">
              <p className="hoverBtnText">VIEW MORE</p>
            </Link>
          </button>
        </div>
      </div>
    </li>
  );
};

export default InnerList;
