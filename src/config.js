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
