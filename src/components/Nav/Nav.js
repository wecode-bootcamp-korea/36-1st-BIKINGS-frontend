import React, { useState, useRef } from 'react';
import DropDown from './DropDown/DropDown';
import Login from '../../pages/Main/Login/Login';
import './Nav.scss';

const Nav = ({ onChangePage }) => {
  const [navRender, setNavRender] = useState(false);
  const [scrollOption, setScrollOption] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const togleLogin = () => {
    setIsLogin(isLogin => !isLogin);
  };

  const navRef = useRef(null);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setScrollOption(true);
      navRef.current.getElementsByClassName('common')[0].style.backgroundColor =
        '#d42939';
    } else {
      setScrollOption(false);
      navRef.current.getElementsByClassName('common')[0].style.backgroundColor =
        'unset';
    }
  });

  const popNavBar = () => {
    setNavRender(true);
    navRef.current.getElementsByClassName('common')[0].style.backgroundColor =
      '#d42939';
  };

  return (
    <div
      ref={navRef}
      className={scrollOption ? 'navigation clicked' : 'navigation'}
    >
      <div className="common">
        <div className="navLeft">
          <div className="mainTitle">300</div>
          <li className="topFontLeft" onMouseOver={popNavBar}>
            자전거
          </li>
          <li className="topFontLeft">용품</li>
          <li className="topFontLeft">대리점</li>
        </div>

        <div className="navRight">
          <div className="images">
            <img className="topImage" alt="blog" src="/images/blog2.png" />
            <img className="topImage" alt="blog" src="/images/instagram2.png" />
            <img className="topImage" alt="blog" src="/images/facebook2.png" />
            <img className="topImage" alt="blog" src="/images/youtube2.png" />
          </div>
          <div className="topRight">
            <li className="topFontRight" onClick={togleLogin}>
              Login
            </li>
            <img
              className="shoppingCart"
              alt="shoppingCart"
              src="images/shopping-cart2.png"
              onClick={() => onChangePage('price')}
            />
          </div>
        </div>
      </div>
      {navRender && <DropDown navRender={setNavRender} />}
      {isLogin && <Login togleLogin={togleLogin} />}
    </div>
  );
};
export default Nav;
