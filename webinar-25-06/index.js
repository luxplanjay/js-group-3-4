'use strict';

// const guest = {
//   id: 3,
//   name: 'Mango',
//   age: 5,
//   ishappy: true,
//   friends: ['Poly', 'Ajax'],
// };

// const asJSON = JSON.stringify(guest, null, 2);

// console.log(asJSON);

// const asObj = JSON.parse(asJSON);

// console.log(asObj);

// console.log('qweqwe before');

// fetch('https://api.myjson.com/bins/k9i31', {
//   method: 'GET',
//   // headers: {
//   //   'Content-Type': 'application/json',
//   // },
// })
//   .then(response => {
//     if (response.ok) return response.json();

//     throw new Error('Error' + response.statusText);
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log('ERROR:' + err));

// console.log('qweqwe after');

//================ POST
// const newPost = {
//   author: 'Mango',
//   body: 'CRUD is awesome',
// };

// const url = 'https://jsonplaceholder.typicode.com/posts';

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(newPost),
// };

// fetch(url, options)
//   .then(res => {
//     if (res.ok) return res.json();

//     throw new Error('error');
//   })
//   .then(post => console.log(post));

//==================== GET

// const getPostById = id =>
//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response => {
//       const data = response.json();
//       console.log(data);

//       return data;
//     })
//     .then(x => {
//       console.log(x);

//       return x;
//     });

// getPostById(12).then(post => console.log(post));
// getPostById(14).then(post => console.log(post));
// getPostById(16).then(post => console.log(post));

//===================== UPDATE

// const postToUpdate = {
//   body: 'CRUD is realy awesome',
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then(res => res.json())
//   .then(data => console.log(data));

// =============================== DELETE

// const updatePostList = () => console.log('update post list');

// const deletePostById = id =>
//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
//   }).catch(error => console.log('ERROR' + error));

// deletePostById(5).then(updatePostList);

// POST тело -> Ответ с добавленым id -> обновили интерфейс
// GET -> Ответ с данными -> обновили интерфейс
// PUT тело-> Ответ с обновленными данными -> обновили интерфейс
// DELETE -> Ответ со статусом 200 -> обновили интерфейс
