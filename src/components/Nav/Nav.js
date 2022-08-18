import React from 'react';
import DropDown from './DropDown';
import './Nav.scss';

const Nav = () => {
  return (
    <div>
      <div className="top">
        <div className="navLeft">
          <div className="mainTitle">300</div>
          <li className="topFontLeft">자전거</li>
        </div>

        <div className="searchBar">
          <input
            className="searchBarInput"
            type="text"
            placeholder="검색어를 입력하세요"
          />
          <button className="button">
            <img
              className="buttonImage"
              alt="buttonImage"
              src="images/loupe.png"
            />
          </button>
        </div>

        <div className="navRight">
          <div className="images">
            <img className="topImage" alt="blog" src="images/blog.png" />
            <img className="topImage" alt="blog" src="images/instagram.png" />
            <img className="topImage" alt="blog" src="images/facebook.png" />
            <img className="topImage" alt="blog" src="images/youtube.png" />
          </div>
          <div className="topRight">
            <li className="topFontRight">Login</li>
            <img
              className="shoppingCart"
              alt="shoppingCart"
              src="images/shopping-cart.png"
            />
          </div>
        </div>
      </div>
      <DropDown />
    </div>
  );
};

export default Nav;
