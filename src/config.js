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

export const fetchData = async (url, setState) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMUBnbWFpbC5jb20iLCJpZCI6MSwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZSIsImlhdCI6MTY2MTEzMDIzNX0.1ZQ9uebdi1950j-dhZcG-3Tsf_9KTjWgFltGYQ7WOVk',
      },
    });
    if (!response.ok) {
      throw new Error('서버가 이상합니다.');
    }
    const data = await response.json();
    setState(Object.values(data)[1]);
  } catch (error) {
    throw new Error(`에러가 발생했습니다. ${error.message}`);
  }
};

export const deleteData = async (url, id, execution) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMUBnbWFpbC5jb20iLCJpZCI6MSwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZSIsImlhdCI6MTY2MTEzMDIzNX0.1ZQ9uebdi1950j-dhZcG-3Tsf_9KTjWgFltGYQ7WOVk',
      },
      body: JSON.stringify(id),
    }).then(execution);
    if (!response.ok) {
      throw new Error('서버가 이상합니다.');
    }
  } catch (error) {
    throw new Error(`에러가 발생했습니다. ${error.message}`);
  }
};
