import axios from 'axios';

const fetchUser = id => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.data)
    .then(({ id, username: name, email }) => ({ id, name, email }));
};

export default fetchUser;
