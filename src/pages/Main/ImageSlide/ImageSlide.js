import React, { useState, useEffect } from 'react';
import { image } from '../../../Function';
import './ImageSlide.scss';

const ImageSlide = () => {
  const [imgNum, setImgNum] = useState(0);

  const showNextImage = () => {
    setImgNum(imgNum => (imgNum === IMG_BOX.length - 1 ? 0 : imgNum + 1));
  };

  const showprevImage = () => {
    setImgNum(imgNum => (imgNum === 0 ? IMG_BOX.length - 1 : imgNum - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImgNum(imgNum => (imgNum === IMG_BOX.length - 1 ? 0 : imgNum + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="imageSlide">
      <img
        className="btn left"
        src={image('left-arrow')}
        alt="leftArrrow"
        onClick={showprevImage}
      />
      <img
        className="btn right"
        src={image('right-arro')}
        alt="rightArrrow"
        onClick={showNextImage}
      />
      {IMG_BOX.map((picture, index) => {
        return (
          <div
            className={index === imgNum ? 'slide_active' : 'slide'}
            key={picture.id}
          >
            {index === imgNum && (
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
