import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <ul className="customContainer">
        <li className="list">
          <p className="listCategory">CUSTOMER CENTER</p>
          <p className="listGrey">
            제품, 서비스, A/S에 대해 <br />
            궁금한 점이 있으시면 무엇이든 물어보세요.
          </p>
          <p className="listNum">02-2671-3000</p>
          <p>am 09:00 ~ pm 05:00</p>
        </li>
        <li className="list">
          <p className="listCategory">대량구매</p>
          <p className="listGrey">
            자전거 대량구매가 <br />
            필요하시면, 특수 판매팀에 문의하세요
          </p>
          <p>sa22m_sales@samchuly.co.kr</p>
        </li>

        <li className="list">
          <p className="listCategory">SUPPORT</p>
          <p className="listGrey">자주 묻는 질문 </p>
        </li>
        <li className="list">
          <p className="listCategory">COMPANY</p>
          <p className="listGrey">ALL.WAYS</p>
          <p className="listGrey">선수후원</p>
          <p className="listGrey">윤리강령</p>
        </li>
      </ul>
      <div className="footerContainer">
        <div className="linkArea">
          <ul className="linkUl">
            <li className="linkAfter">개인정보취급방침</li>
            <li className="linkAfter">개인정보취급방침</li>
            <li>개인정보취급방침</li>
          </ul>
          <select className="linkSelect">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>
        <div className="footerAreas">
          <p className="footerArea">
            본사 : 서울특별시 강남구 테헤란로 위워크 10층 | A/S : 01-1234-1234
            <br />
            <br />
            Copyright © 2020 - 2022 wecode. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
