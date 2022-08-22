import React, { useState, useEffect } from 'react';
import './ProductCheackList.scss';

// 카테고리 목록

function ProductCheackList() {
  const [checkedList, setCheckedList] = useState([]);
  const [categoty, setCategoty] = useState([]);

  const onCheckedElement = e => {
    e.target.checked
      ? setCheckedList([...checkedList, e.target.value])
      : setCheckedList(
          checkedList.filter(element => element !== e.target.value)
        );
  };
  console.log(checkedList);

  useEffect(() => {
    fetch(`/data/CheckList.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setCategoty(res))
      .catch(rej => alert(rej));
  }, []);

  return (
    <div className="ProductCheackList">
      <h3>카테고리</h3>
      <div className="checkList">
        <div className="checkBoxList">
          {categoty.map(({ id, name }) => {
            return (
              <div className="checkBox" key={id}>
                <input
                  type="checkbox"
                  value={name}
                  onChange={e => {
                    onCheckedElement(e);
                  }}
                  checked={checkedList.includes(name) ? true : false}
                />
                <div>{name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductCheackList;
