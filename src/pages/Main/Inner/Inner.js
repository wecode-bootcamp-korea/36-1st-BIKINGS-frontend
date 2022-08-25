import React, { useEffect, useState } from 'react';
import InnerList from './InnerList/InnerList';
import './Inner.scss';

const Inner = () => {
  const [lists, setList] = useState([]);

  useEffect(() => {
    fetch('data/data.json')
      .then(response => response.json())
      .then(result => setList(result));
  }, []);

  return (
    <div className="inner">
      <div className="container">
        <div className="headContainer">
          <div className="lineContainer">
            <div className="line" />
          </div>
          <h3 className="headText">FIND YOUR STYLE</h3>
          <div className="lineContainer">
            <div className="line" />
          </div>
        </div>
        <ul className="listBicycle">
          {lists.map(list => (
            <InnerList key={list.id} list={list} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Inner;
