import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="customContainer">
        <li className="list">
          <p className="listCategory">CUSTOMER CENTER</p>
          <p className="listGrey">
            제품, 서비스, A/S에 대해 <br />
            궁금한 점이 있으시면 무엇이든 물어보세요.
          </p>
          <strong className="listNum">02-2671-3000</strong>
          <strong>am 09:00 ~ pm 05:00</strong>
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
            <li className="linkAfter">내부정보관리규정</li>
            <li>이메일무단수집동의</li>
          </ul>
          <select className="linkSelect">
            <option value="electric">36기 최고</option>
            <option value="bycle">1차 프로젝트 완성!</option>
          </select>
        </div>
        <div className="footerAreas">
          <p className="footerArea">
            BIKINGS : 서울특별시 강남구 테헤란로 위워크 10층 102호 BIKINGS
            <br />
            <br />
            Copyright © 2022 Wecode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
