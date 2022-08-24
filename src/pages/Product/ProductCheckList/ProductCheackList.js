import React, { useState, useEffect } from 'react';
import './ProductCheackList.scss';

function ProductCheackList({ serach }) {
  const [checkedList, setCheckedList] = useState([]);
  const [categoty, setCategoty] = useState([]);

  const onCheckedElement = e => {
    e.target.checked
      ? setCheckedList([...checkedList, e.target.id])
      : setCheckedList(checkedList.filter(element => element !== e.target.id));
  };

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
              <div className="checkBoxs" key={id}>
                <input
                  className="checkBox"
                  type="checkbox"
                  value={name}
                  id={id}
                  onChange={e => {
                    onCheckedElement(e);
                  }}
                  checked={checkedList.includes(String(id)) ? true : false}
                />
                <div>{name}</div>
              </div>
            );
          })}
        </div>
        <button className="serchCategory" onClick={() => serach(checkedList)}>
          검색
        </button>
      </div>
    </div>
  );
}

export default ProductCheackList;
