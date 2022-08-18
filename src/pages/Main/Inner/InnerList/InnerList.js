import React from 'react';
import { Link } from 'react-router-dom';
import './InnerList.scss';

const InnerList = ({ src, name, description, icon }) => {
  return (
    <li className="listCategory">
      <img className="listImage" src={src} alt="list" />
      <div className="bgBox">{name}</div>
      <div class="darkness">
        <div class="hoverDetail">
          <img className="hoverImg" src={icon} alt="mainImage" />
          <h3 className="hoverName">{name}</h3>
          <h4 className="hoverDes">{description}</h4>
          <button className="hoverBtn" type="submit">
            <Link to="/product">
              <h4 className="hoverBtnText">VIEW MORE</h4>
            </Link>
          </button>
        </div>
      </div>
    </li>
  );
};

export default InnerList;
