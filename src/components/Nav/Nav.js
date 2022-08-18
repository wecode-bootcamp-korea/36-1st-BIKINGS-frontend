import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
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
        <button />
      </div>
      <div className="images">
        <img className="topImage" alt="blog" src="images/blog.png" />
        <img className="topImage" alt="blog" src="images/instagram.png" />
        <img className="topImage" alt="blog" src="images/facebook.png" />
        <img className="topImage" alt="blog" src="images/youtube.png" />
      </div>
      <li className="topFontRight">MyPage</li>
    </div>
  );
};

export default Nav;
