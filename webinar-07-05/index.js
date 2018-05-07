'use strict';

// const user = {
//   name: 'Mango',
//   age: 10,
//   friends: 300,
//   status: 'happy',
//   isActive: true,
//   addFriends(val) {
//     user.friends += val;
//   },
// };

// console.log(user);

// console.log(user);
// console.log( 'prop' in user );
// console.log( user.hasOwnProperty('prop') );

// const getPropValue = (obj, prop) => {
//   console.log( obj[prop] );
// }

// getPropValue(user, 'isActive');

//=======================

// let a = 5;
// let b = a;

// console.log('a: ', a);
// console.log('b: ', b);

// a = 10;

// console.log('a: ', a);
// console.log('b: ', b);

// let a = { num: 5 };
// let b = a;

// console.log('a: ', a);
// console.log('b: ', b);

// a.num = 10;

// console.log('a: ', a);
// console.log('b: ', b);

// b.qwe = 'new prop';

// console.log('a: ', a);
// console.log('b: ', b);

//=====================

// let x = 5;

// function changeValue(val) {
//   val = 10;
// }

// changeValue(x);
// console.log(x);

//========================
// const numbers = [1, 2, 3];

// function addToArray(arr) {
//   arr.push(4);
// }

// addToArray(numbers);
// console.log(numbers);

// ==============
// const user = {
//   name: 'Mango',
//   age: 10,
//   friends: 300,
//   status: 'happy',
//   isActive: true,
//   addFriends(val) {
//     user.friends += val;
//   },
// };

// for (let key in user) {
//   const hasKey = user.hasOwnProperty(key);

//   if (hasKey) {
//     console.log(`${key}: ${user[key]}`);
//   }
// }

//=================
// const user = {
//   name: 'Mango',
//   age: 10,
//   friends: 300,
//   status: 'happy',
//   isActive: true,
//   addFriends(val) {
//     user.friends += val;
//   },
// };

// const keys = Object.keys(user);

// console.log(keys);

// for (let key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// const entries = Object.entries(user);

// console.log(entries);

// for (const entry of entries) {
//   console.log('entry:', entry);
//   const [key, value] = entry;
//   // const key = entry[0];
//   // const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

//=====================

const shop = {
  products: [
    { name: 'apples', amount: 100, price: 30 },
    { name: 'grapes', amount: 150, price: 40 },
    { name: 'bananas', amount: 200, price: 50 },
  ],
  addProduct(product) {
    shop.products.push(product);
  },
  getProductInfo(productName) {
    for (const elem of shop.products) {
      if (elem.name === productName) {
        return elem;
      }
    }
  },
  addProductAmount(productName, num) {
    console.log(`Adding ${num} ${productName}`);

    // const product = shop.getProductInfo(productName);
    // product.amount += num;

    for (const elem of shop.products) {
      if (elem.name === productName) {
        elem.amount += num;
      }
    }
  },
  subtractProductAmount(productName, num) {
    console.log(`Selling ${num} ${productName}`);

    for (const elem of shop.products) {
      if (elem.name === productName) {
        elem.amount -= num;
      }
    }
  },
  getAllProducts() {
    return shop.products;
  }
};

// const products = shop.getAllProducts();
// console.log( products );

// shop.addProduct({
//   name: 'mango',
//   amount: 300,
//   price: 100,
// });
// console.log(shop);

// const info = shop.getProductInfo('grapes');
// console.log(info);

// shop.addProductAmount('apples', 150);
// shop.subtractProductAmount('grapes', 100);
// console.log(shop);

//=================================
// const a = { x: 10, y: 'hello' };
// const b = { z: 25 };
// const c = { x: 25, prop: 'qweqwe' };

// Object.assign(a, b, c);

// console.log(a);

// const defaultSettings = {
//   name: 'user',
//   isActive: false,
//   mail: '',
//   theme: 'light',
//   isAdmin: false,
// };

// const userSettings = {
//   name: 'Mango',
//   mail: 'mango@gmail.com',
//   theme: 'dark',
// };

// const settings = Object.assign(
//   {},
//   defaultSettings,
//   userSettings
// );

// console.log(settings);

// const settings = {
//   ...defaultSettings,
//   ...userSettings
// };

// console.log(settings);

//====================================
// const user = {
//   name: 'Mango',
//   age: 10,
//   friends: 300,
//   status: 'happy',
//   isActive: true,
// };

// const { name, age, ...rest } = user;

// console.log(name);
// console.log(age);
// console.log(rest);

// const {
//   age: userAge,
//   isActive: active,
//   name: userName = 'user',
//   friends = 0,
// } = user;

// console.log(userName);
// console.log(userAge);
// console.log(active);
// console.log(friends);
