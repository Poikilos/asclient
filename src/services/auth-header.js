export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // for other backend:
    // return { Authorization: 'Bearer ' + user.accessToken };
    // for Node.js Express back-end
    return {
      'x-access-token': user.accessToken,
      'content-type': 'multipart/form-data',
    };
  } else {
    return {};
  }
}

// (BezKoder, 2019b)
