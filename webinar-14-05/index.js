// https://docs.google.com/spreadsheets/d/1c3uNBep2u9_ccjssFTfE6fEsTSacf2DuQs_KGK-LPNw/edit?usp=sharing
'use strict';
//========================== MAP
// const numbers = [1, 2, 3, 4, 5];

// const usersDb = [
//   { id: '000', name: 'mango', posts: 218, isActive: true },
//   { id: '001', name: 'poly', posts: 179, isActive: false },
//   { id: '002', name: 'ajax', posts: 32, isActive: true },
//   { id: '003', name: 'chelsey', posts: 74, isActive: false },
// ];

// const map = (arr, callback) => {
//   const resultArray = [];

//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     const element = arr[i];
//     const item = callback(element, i, arr);
//     resultArray.push(item);
//   }

//   return resultArray;
// };

// const double = value => value * 2;
// const plusFive = value => value + 5;
// const getUserName = user => user.name;
// const toggleUserActiveState = user => ({
//   ...user,
//   isActive: !user.isActive,
// });

// const userNames = map(usersDb, user => user.name);
// const userPostsCount = map(usersDb, user => user.posts);
// const toggledUsers = map(usersDb, user => ({
//   ...user,
//   isActive: !user.isActive,
// }));

// const fnUserName = usersDb.map(user => user.name);

// const changedUsers = usersDb.map(function(user) {
//   if (user.name === 'poly') {
//     return {
//       ...user,
//       name: 'abrakadabra',
//     };
//   }

//   return user;
// });

// const properChangedUsers = usersDb.map(
//   user =>
//     user.name === 'poly'
//       ? { ...user, name: 'abrakadabra' }
//       : user,
// );

// console.log(changedUsers);

// console.log('usersDb: ', usersDb);
// console.log('userNames: ', userNames);
// console.log('fnUserName: ', fnUserName);
// console.log('userPostsCount: ', userPostsCount);
// console.log('toggledUsers: ', toggledUsers);

//=========================================
// const numbers = [1, 2, 3, 4, 5];

// const filter = function(arr, callback) {
//   const resultArray = [];

//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     const element = arr[i];
//     const passed = callback(element, i, arr);

//     if (passed) {
//       resultArray.push(element);
//     }
//   }

//   return resultArray;
// };

// const greaterThenFive = value => value > 2 && value < 4;

// const filteredNumbers = filter(numbers, greaterThenFive);
// const fnFilteredNumbers = numbers.filter(greaterThenFive);

// console.log('filteredNumbers: ', filteredNumbers);
// console.log('fnFilteredNumbers: ', fnFilteredNumbers);

// const usersDb = [
//   { id: '000', name: 'mango', posts: 218, isActive: true },
//   { id: '001', name: 'poly', posts: 179, isActive: false },
//   { id: '002', name: 'ajax', posts: 132, isActive: true },
//   { id: '003', name: 'chelsey', posts: 74, isActive: false },
// ];

// const activeUsers = usersDb.filter(user => user.isActive);
// const frequentPosters = usersDb.filter(user => user.posts >= 100);

// console.log('activeUsers: ', activeUsers);
// console.log('frequentPosters: ', frequentPosters);

//=======================================================

// const usersDb = [
//   { id: '000', name: 'mango', posts: 218, isActive: true },
//   { id: '001', name: 'poly', posts: 179, isActive: false },
//   { id: '002', name: 'ajax', posts: 132, isActive: true },
//   { id: '003', name: 'chelsey', posts: 74, isActive: false },
// ];

// const find = (arr, callback) => {
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     const element = arr[i];
//     const passed = callback(element, i, arr);

//     if (passed) {
//       return element;
//     }
//   }
// };

// const getUserByName = user => user.name === 'ajax';
// const user = find(usersDb, getUserByName);

// const fnUser = usersDb.find(user => user.name === 'mango');
// console.log(fnUser)

// const getUserByName = (arr, name) => arr.find(x => x.name === name);
// const user = getUserByName(usersDb, 'ajax');

// console.log(user);

//============================================
// const numbers = [1, 2, 3, 4, 5, 6];

// const callback = (accumulator, element) => accumulator + element;
// const sum = numbers.reduce(callback, 0);
// console.log(sum);

// const usersDb = [
//   { id: '000', name: 'mango', posts: 218, isActive: true },
//   { id: '001', name: 'poly', posts: 179, isActive: false },
//   { id: '002', name: 'ajax', posts: 132, isActive: true },
//   { id: '003', name: 'chelsey', posts: 74, isActive: false },
// ];

// const callback = (acc, user) => acc + user.posts;
// const postCount = usersDb.reduce(callback, 0);
// console.log('postCount: ', postCount);

// const callback = (acc, user) => {
//   acc[user.name] = user.posts;
//   return acc;
// };
// const sidebarInfo = usersDb.reduce(callback, {});
// console.log(sidebarInfo);

//=====================
// const numbers = [1, 2, 3, 4, 5];

// const addNumberIfUnique = (arr, num) => {
//   const hasValue = arr.includes(num);

//   if (!hasValue) {
//     arr.push(num);
//   }
// };

// addNumberIfUnique(numbers, 3);

// console.log(numbers);

//=============================================
// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(x => x * 2);
// const filtered = doubled.filter(x => x > 5);

// const result = numbers
//   .map(x => x * 2)
//   .filter(y => y > 5)
//   .reduce((acc, z) => acc + z, 0);

// console.log(result);

// const x = arr
//   .filter(user => user.name.includes('o') || user.name.includes('p'))
//   .reduce((acc, user) => acc + user.posts, 0);

//=== FOR EACH
// const numbers = ['a', 'b', 'c', 'd', 'e'];

// const callback = (element, idx) => {
//   console.log('element: ', element);
//   console.log('idx: ', idx);
// };

// numbers.forEach(callback);

// ==========
// ==========
// ==========
// ==========
// ==========
// ==========
// ==========
// ==========
// ==========
// ==========
// ==========
// ==========
// ==========
const usersDb = [
  { id: '000', name: 'mango', posts: 218, isActive: true },
  { id: '001', name: 'poly', posts: 179, isActive: false },
  { id: '002', name: 'ajax', posts: 32, isActive: true },
  { id: '003', name: 'chelsey', posts: 74, isActive: false },
];

// const getUserNames = users => users.map(user => user.name);
// const userNames = getUserNames(usersDb);
// console.log('userNames: ', userNames);

// const getActiveUsers = users => users.filter(user => user.isActive);
// const activeUsers = getActiveUsers(usersDb);
// console.log('activeUsers: ', activeUsers);

// const getUserById = (users, id) => users.find(user => user.id === id);
// const user = getUserById(usersDb, '001');
// console.log('user: ', user);

// const getUserPostsCount = (users, userName) => {
//   const user = users.find(user => user.name === userName);
//   const postsCount = user.posts;

//   return postsCount;
// };

// const getUserPostsCount = (users, userName) =>
//   users.find(user => user.name === userName).posts;
// const postsCount = getUserPostsCount(usersDb, 'poly');
// console.log('postsCount: ', postsCount);

// const getActiveUsersPostsCount = users =>
//   users
//     .filter(user => user.isActive)
//     .reduce((acc, user) => acc + user.posts, 0);

// const postsCount = getActiveUsersPostsCount(usersDb);
// console.log('postsCount: ', postsCount);

// const getActiveUsersPostsCountWithReduce = users => {
//   const result = users.reduce((acc, user) => {
//     if (user.isActive) {
//       return acc + user.posts;
//     }

//     return acc;
//   }, 0);

//   return result;
// };

// const getActiveUsersPostsCountWithReduce = users =>
//   users.reduce((acc, user) => (user.isActive ? acc + user.posts : acc), 0);

// const postsCount = getActiveUsersPostsCountWithReduce(usersDb);
// console.log('postsCount: ', postsCount);

const Shop = function(products) {
  this.products = products;

  this.getProductsNames = function() {
    return this.products.map(product => product.name);
  };

  this.addProduct = function(product) {
    this.products.push(product);
  };

  this.removeProduct = function(name) {
    this.products = this.products.filter(product => product.name !== name);
  };
};

const shop = new Shop([
  { name: 'apples', price: 20 },
  { name: 'grapes', price: 30 },
]);

console.log(shop.getProductsNames());
shop.addProduct({ name: 'rabbit', price: 80 });
shop.removeProduct('apples');
console.log(shop);
