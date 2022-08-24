import React, { useState, useRef, useEffect } from 'react';
import DropDown from './DropDown';
import './Nav.scss';

const Nav = () => {
  const [navRender, setNavRender] = useState(false);
  const [scrollOption, setScrollOption] = useState(false);
  const [getNumberCart, setGetNumberCart] = useState([]);

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
    fetch('http://10.58.1.132:8000/carts/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMUBnbWFpbC5jb20iLCJpZCI6MSwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZSIsImlhdCI6MTY2MTI5OTg2M30.DNIylmQKbJdHQMtfhVOYqTrTwQQL4-5Mx8aFkKVAKdQ',
      },
    })
      .then(response => response.json())
      .then(result => setGetNumberCart(result));
  }, []);

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
            <div className="basedOnCart">
              {getNumberCart > 0 && getNumberCart.data.length}
            </div>
          </div>
        </div>
      </div>
      {navRender && <DropDown navRender={setNavRender} />}
    </div>
  );
};

export default Nav;
