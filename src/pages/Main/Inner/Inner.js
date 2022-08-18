import React, { useEffect, useState } from 'react';
import './Inner.scss';
import InnerList from './InnerList/InnerList';

const Inner = () => {
  const [lists, setList] = useState([]);

  useEffect(() => {
    fetch('data/data.json')
      .then(response => response.json())
      .then(result => setList(result));
  }, []);

  return (
    <div className="Inner">
      <div className="container">
        <div className="headContainer">
          <div className="line-container">
            <div className="line" />
          </div>
          <h3 className="headText">FIND YOUR STYLE</h3>
          <div className="line-container">
            <div className="line" />
          </div>
        </div>
        <ul className="listBicycle">
          {lists.map(list => (
            <InnerList
              key={list.id}
              src={list.src}
              name={list.name}
              description={list.description}
              icon={list.icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Inner;
