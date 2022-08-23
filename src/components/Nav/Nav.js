import React, { useState } from 'react';
import DropDown from './DropDown';
import './Nav.scss';

const Nav = () => {
<<<<<<< HEAD
  const [navRender, setNavRender] = useState(false);
  const [scrollOption, setScrollOption] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      setScrollOption(true);
    } else setScrollOption(false);
  });

  const popNavBar = () => {
    setNavRender(true);
  };

  return (
    <div className={scrollOption ? 'navigation clicked' : 'navigation'}>
      <div className="common">
        <div className="navLeft">
          <div className="mainTitle">300</div>
          <li className="topFontLeft" onMouseOver={popNavBar}>
            자전거
          </li>
          <li className="topFontLeft">용품</li>
          <li className="topFontLeft">대리점</li>
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
            <img className="topImage" alt="blog" src="images/blog2.png" />
            <img className="topImage" alt="blog" src="images/instagram2.png" />
            <img className="topImage" alt="blog" src="images/facebook2.png" />
            <img className="topImage" alt="blog" src="images/youtube2.png" />
          </div>
          <div className="topRight">
            <li className="topFontRight">Login</li>
            <img
              className="shoppingCart"
              alt="shoppingCart"
              src="images/shopping-cart2.png"
            />
          </div>
        </div>
      </div>
      {navRender && <DropDown navRender={setNavRender} />}
    </div>
  );
=======
  return <div />;
>>>>>>> d8c5182c15ec8cfd25c455d09108ecefa51df02c
};

export default Nav;
