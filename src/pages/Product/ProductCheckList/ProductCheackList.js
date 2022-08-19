import React, { useState } from 'react';
import './ProductCheackList.scss';

// 카테고리 목록
const CATEGORY_LIST = [
  { id: 0, data: '전기' },
  { id: 1, data: '산악' },
  { id: 2, data: '유아' },
  { id: 3, data: '로드' },
  { id: 4, data: '암튼' },
  { id: 5, data: '머시기' },
  { id: 6, data: '뭔가' },
  { id: 7, data: '무언가' },
];

function ProductCheackList() {
  const [checkedList, setCheckedList] = useState([]);
  const onCheckedElement = e => {
    if (e.target.checked) {
      setCheckedList([...checkedList, e.target.value]);
    } else if (!e.target.checked) {
      setCheckedList(checkedList.filter(element => element !== e.target.value));
    }
  };
  return (
    <div className="ProductCheackList">
      <h3>카테고리</h3>
      <div className="checkList">
        <div className="checkBoxList">
          {CATEGORY_LIST.map(item => {
            return (
              <div className="checkBox" key={item.id}>
                <input
                  type="checkbox"
                  value={item.data}
                  onChange={e => {
                    onCheckedElement(e);
                  }}
                  checked={checkedList.includes(item.data) ? true : false}
                />
                <div>{item.data}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductCheackList;
