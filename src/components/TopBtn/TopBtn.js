import React, { useEffect, useState } from 'react';
import '../TopBtn/TopBtn.scss';

const Topbtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="topBtn">
      {showTopBtn && (
        <button className="activeBtn" onClick={goToTop}>
          TOP
        </button>
      )}
    </div>
  );
};

export default Topbtn;
