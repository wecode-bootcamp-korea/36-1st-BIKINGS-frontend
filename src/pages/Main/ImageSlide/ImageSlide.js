import React, { useState, useEffect } from 'react';
import { image } from '../../../Function';
import './ImageSlide.scss';

const ImageSlide = () => {
  const [current, setCurrent] = useState(0);
  const length = IMG_BOX.length;

  const showNextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const showprevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="ImageSlide">
      <img
        className="btn left"
        src={image('left-arrow')}
        alt="leftArrrow"
        onClick={showprevImage}
      />
      <img
        className="btn right"
        src={image('right-arrow')}
        alt="rightArrrow"
        onClick={showNextImage}
      />
      {IMG_BOX.map((picture, index) => {
        return (
          <div
            className={index === current ? 'slide_active' : 'slide'}
            key={picture.id}
          >
            {index === current && (
              <img className="imgBox" src={picture.src} alt="slideImage" />
            )}
          </div>
        );
      })}
      <div className="mouseDown">
        <img src={image('mouseDown')} alt="mouseDown" />
        <p>SCROLL DOWN</p>
      </div>
    </div>
  );
};

export default ImageSlide;

const IMG_BOX = [
  {
    id: 1,
    src: image('MainImages/mainImg1'),
  },
  {
    id: 2,
    src: image('MainImages/mainImg2'),
  },
  {
    id: 3,
    src: image('MainImages/mainImg3'),
  },
  {
    id: 4,
    src: image('MainImages/mainImg4'),
  },
];
