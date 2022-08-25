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
