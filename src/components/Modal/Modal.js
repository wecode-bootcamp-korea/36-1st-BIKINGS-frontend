import React, { useEffect } from 'react';
import './Modal.scss';

const Modal = ({ togleModal, content, propsFuntion }) => {
  const closeModal = e => {
    if (e.target === e.currentTarget) {
      togleModal();
    }
  };

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modalContainer">
        <p className="content">{content}</p>
        <div className="modalBtn">
          <button className="btn close" onClick={togleModal}>
            닫기
          </button>
          <button
            className="confirm btn"
            onClick={function () {
              propsFuntion();
              togleModal();
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
