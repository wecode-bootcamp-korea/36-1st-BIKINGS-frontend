// const login = e => {
//   e.preventDefault();
//   fetch('', {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       id: inputValues.id,
//       password: inputValues.password,
//     }),
//   })
//     .then(response => response.json())
//     .then(data => {
//       localStorage.setItem('Token', data.accessToken);
//       navigate('/main-bosung');
//     });
// };
// const signUp = e => {
//   e.preventDefault();
//   fetch('', {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       id: inputValues.id,
//       password: inputValues.password,
//     }),
//   })
//     .then(response => response.json())
//     .then(data => {});
// };

export const getDataClickBtn = async (url, setState) => {
  const response = await fetch(url, {
    method: 'GET',
  });
  const data = await response.json();
  setState(data);
};

export const getProductDetailData = async (url, setState) => {
  const response = await fetch(url, {
    method: 'GET',
  });
  const data = await response.json();
  setState(data);
};

export const getProduct = async (url, setState) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  setState(Object.values(data));
};

export const serchTag = async (url, setState) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  setState(Object.values(data)[0].getProductsByTags);
};

export const postDataClickBtn = async (url, setState) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMUBnbWFpbC5jb20iLCJpZCI6MSwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZSIsImlhdCI6MTY2MTIzNTAyNn0.7x9lDvoBsqge7GlvUh-GG2RD6JUQwwlZ4MHtIc158bc',
    },
  });
  const data = await response.json();
  setState(data);
};
