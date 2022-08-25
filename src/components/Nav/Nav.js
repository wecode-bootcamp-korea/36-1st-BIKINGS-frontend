import React, { useState, useRef, useEffect } from 'react';
import Login from '../../pages/Main/Login/Login';
import DropDown from './DropDown';
import './Nav.scss';

const Nav = ({ onChangePage }) => {
  const [navRender, setNavRender] = useState(false);
  const [scrollOption, setScrollOption] = useState(false);
  const [getNumberCart, setGetNumberCart] = useState([]);
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

  useEffect(() => {
    fetch('http://10.58.1.132:8000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMkBnbWFpbC5jb20iLCJpZCI6MiwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZTIiLCJpYXQiOjE2NjEzODgwMDZ9.sSUjlL9ErJop8XYPRU-yGtwbsQbQkA3QieZ8tk0Mtcc',
      },
    })
      .then(response => response.json())
      .then(result => setGetNumberCart(result));
  }, []);

  console.log(getNumberCart);
  const CartNum = getNumberCart?.data?.length;

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
            {getNumberCart?.data?.length > 0 && (
              <div className="basedOnCart">
                {getNumberCart?.data?.length > 0 && CartNum}
              </div>
            )}
          </div>
        </div>
      </div>
      {navRender && <DropDown navRender={setNavRender} />}
      {isLogin && <Login togleLogin={togleLogin} />}
    </div>
  );
};
export default Nav;
