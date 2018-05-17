// https://docs.google.com/spreadsheets/d/1c3uNBep2u9_ccjssFTfE6fEsTSacf2DuQs_KGK-LPNw/edit?usp=sharing
'use strict';

//======================== activeUsers
// const usersDb = [
//   { id: 0, login: 'mango', email: 'mango@gmail.com', active: true },
//   { id: 1, login: 'poly', email: 'poly@gmail.com', active: true },
//   { id: 2, login: 'ajax', email: 'ajax@gmail.com', active: false },
// ];

// const users = usersDb.map(user => {
//   if (user.active) {
//     return {
//       ...user,
//       login: `${user.login}-active`,
//     };
//   }

//   return user;
// });

// const users = usersDb.map(
//   user => (user.active ? { ...user, login: `${user.login}-active` } : user),
// );

// console.log(users);

// const getActiveUsers = users => users.filter(user => user.active);

// const activeUsers = getActiveUsers(usersDb);

// console.log('[activeUsers]: ', activeUsers);

// const getActiveUsers = users => {
//   const activeUsers = [];

//   for (const user of users) {
//     if (user.active) {
//       activeUsers.push(user);
//     }
//   }

//   return activeUsers;
// };

// const activeUsers = getActiveUsers(usersDb);

// console.log('[activeUsers]: ', activeUsers);

//===============

/*
  Создайте функцию titleCase(str), которая
  получает строку и возвращает предоставленную строку
  с первой буквой каждого слова, заглавными.
  Остальные буквы слова должны быть не заглавными.
*/

/*
  1. Разбить строку в массив +
  2. Перебрать массив в цикле
  3. На каждой итерации сделать:
    3.1: Взять первую букву элемента
    3.2: Ее в верхний регистр
    3.3 Взять все кроме первой
    3.4 Их в нижний регистр
*/

// const titleCase = function(str) {
//   const arr = str.toLowerCase().split(' ');

//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     const elem = arr[i];

//     const firstLetter = elem[0].toUpperCase();
//     const rest = elem.slice(1);

//     arr[i] = firstLetter + rest;
//   }

//   const result = arr.join(' ');

//   return result;
// };

// // Вызовы функции для проверки
// console.log(titleCase("I'm a little tea pot")); // вернет "I'm A Little Tea Pot"

// console.log(titleCase('sHoRt AnD sToUt')); // вернет "Short And Stout".

// console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')); // вернет "Here Is My Handle Here Is My Spout".

//========================================
const guests = [
  { name: 'Mango', inactiveDays: 15, isActive: true },
  { name: 'Poly', inactiveDays: 8, isActive: false },
  { name: 'Ajax', inactiveDays: 32, isActive: false },
  { name: 'Chelsey', inactiveDays: 85, isActive: true },
];

/*
    1. Используя метод map, пройдите по массиву guests,
    и составьте новый массив, заменив значение
    поля isActive на противоположное.

    2. Напишите функцию setGuestState(guests, period), где
    guests - массив гостей, period - кол-во дней после
    которого считается что гость не активен.

    Если значение поля inactiveDays болше чем period,
    поставить для isActive значение false (если там еще не false)

    Если же значение inactiveDays меньше чем period,
    поставить для isActive значение true (если там еще не true)
*/

const setGuestState = () => {};

// Вызовы функции для проверки
console.log(setGuestState(guests, 10)); // Объекты Mango, Ajax, Chelsey получит isActive false, а Poly наоборот true

console.log(setGuestState(guests, 20)); // Объекты Ajax, Chelsey получит isActive false, а Mango и Poly наоборот true

console.log(setGuestState(guests, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

const initialPosts = {
  '-s19a6hqce': [
    { id: '-5sgljaskg', text: 'post #1', likes: 3 },
    { id: '-199hb6igr', text: 'post #2', likes: 5 },
    { id: '-hy0eyw5qo', text: 'post #3', likes: 13 },
  ],
  '-qkpzenjxe': [
    { id: '-5tu69g5rf', text: 'post #1', likes: 8 },
    { id: '-bje766393', text: 'post #2', likes: 15 },
  ],
  '-e51cpd4di': [
    { id: '-9y6nkmlj4', text: 'post #1', likes: 18 },
    { id: '-i03pbhy3s', text: 'post #2', likes: 45 },
  ],
};

const initialUsers = [
  {
    id: '-s19a6hqce',
    login: 'mangozedog@mail.com',
    password: 'qwe123zv',
    isActive: true,
  },
  {
    id: '-qkpzenjxe',
    login: 'polysweet@skynet.ze',
    password: '123zxc78',
    isActive: true,
  },
  {
    id: '-e51cpd4di',
    login: 'ajax2k@change.ua',
    password: 'ert234qw',
    isActive: false,
  },
];

function SocialBook(users = [], posts = {}) {
  this.users = users;
  this.posts = posts;

  this.addPost = (userId, post) => {
    this.posts[userId].push(post);
  };

  this.addPostLike = (userId, postId) => {
    this.posts[userId] = this.posts[userId].map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.likes + 1,
        };
      }

      return post;
    });
  };
}

const book = new SocialBook(initialUsers, initialPosts);

book.addPost('-qkpzenjxe', { id: 'xxx', text: 'post #qweqwe', likes: 666 });

console.log(book);
