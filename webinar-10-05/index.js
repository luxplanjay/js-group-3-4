// https://docs.google.com/spreadsheets/d/1c3uNBep2u9_ccjssFTfE6fEsTSacf2DuQs_KGK-LPNw/edit?usp=sharing
'use strict';

// const user = {
//   name: 'alex',
//   age: 2,
//   showName() {
//     // console.log(user.name);

//     console.log( this.name );
//   }
// };

// user.showName();

/*
  Тренируемся расставлять this
*/

const shop = {
  products: [
    { name: 'apples', amount: 100, price: 30 },
    { name: 'grapes', amount: 150, price: 40 },
    { name: 'bananas', amount: 200, price: 50 },
  ],
  addProduct(product) {
    this.products.push(product);
  },
  findProduct(productName) {
    for (const elem of this.products) {
      if (elem.name === productName) {
        return elem;
      }
    }
  },
  addProductAmount(productName, num) {
    console.log(`Adding ${num} ${productName}`);

    const product = this.findProduct(productName);
    product.amount += num;
  },
  subtractProductAmount(productName, num) {
    console.log(`Selling ${num} ${productName}`);

    const product = this.findProduct(productName);
    product.amount -= num;
  },
  getAllProducts() {
    return this.products;
  },
};

//===================================
// Сначала как метод, а потом в глобальном контексте
// const obj = {
//   param: 'obj param',
//   showThis() {
//     console.log('this: ', this );
//   }
// }

// obj.showThis();

// const fn = obj.showThis;
// console.log( fn );
// fn();

//===================================
// Сначала как функция а потом как метод

// const showThis = function() {
//   console.log('this: ', this);
// };

// showThis();

// const user = {
//   name: 'Alex',
// };

// user.fn = showThis;

// console.log(user);
// console.log(user.fn);

// user.fn();

//==========
// this в стрелках

// const fn = () => {
//   console.log('this: ', this );
// }

// fn();

// const obj = {
//   name: 'alex'
// };

// obj.x = fn;

// console.log(obj.x);

// obj.x();

//=======================

// const hotel = {
//   name: 'hello',
//   showThis() {
//     console.log('this in showThis: ', this);

//     const fn = () => {
//       console.log('this in fn: ', this);
//     };

//     console.log(fn());
//   },
// };

// hotel.showThis(); // {showThis: ƒ}

//===========
// this в callback
// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function(callback) {
//   console.log('this в fn:', this);

//   console.log('callback: ', callback);
//   callback();
// };

// hotel.newFn = fn;

// hotel.newFn(hotel.showThis);

//===================

// const showName = function(arr) {
//   console.log('this.name: ', this.name);
//   console.log('arr:', arr);
// };

// const userA = {
//   name: 'userA qweqwe',
// };

// const userB = {
//   name: 'userB qeqwe',
// };

// const array = [1, 2, 3, 4, 5];

// showName.call(userA, [1, 2, 3, 4, 5]);
// showName.apply(userB, [1, 2, 3, 4, 5]);

// const boundShowName = showName.bind(userB, [1, 2, 3, 4, 5]);
// boundShowName();

//============================
// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log('this в showThis: ', this);
//   },
// };

// const fn = function(callback) {
//   console.log('this в fn:', this);

//   callback();
// };

// const boundShowThis = hotel.showThis.bind(hotel);

// fn(boundShowThis);

// hotel.showThis();

//=================
// const user = {
//   name: 'Alex',
//   age: 20,
//   isActive: true,
// };

// function User({
//   friendsCount = 0,
//   name = 'user',
//   isActive = false,
//   age = 18,
//   isAdmin = false,
// }) {
//   const message = 'Hello';

//   this.name = name;
//   this.age = age;
//   this.isActive = isActive;
//   this.friendsCount = friendsCount;

//   this.showName = function() {
//     console.log(message + ' ' + this.name);
//   };

//   this.addAge = function(val) {
//     this.age += val;
//   };
// }
// // name, age, isActive, friendsCount
// // const mango = new User('Mango', 2, true, 10);
// // const poly = new User('Poly', 3, false, 20);

// const mango = new User({
//   friendsCount: 10,
//   name: 'Mango',
//   isActive: true,
//   age: 2,
//   isAdmin: true,
// });

// console.log(mango);
// mango.showName();
// mango.addAge(50);

// const poly = new User({
//   friendsCount: 20,
//   name: 'Poly',
//   age: 3,
// });

// console.log(poly);
// poly.showName();

//==================

function Shop({ products = [], managers = [] }) {
  this.products = products;
  this.managers = managers;

  this.addManager = function(params) {
    const manager = new Manager(params);

    this.managers.push(manager);
  };

  this.makeSale = function(managerName, productName) {
    for (const manager of this.managers) {
      if (manager.name === managerName) {
        manager.sell(productName, this.products);
      }
    }
  };

  this.addProduct = function(product) {
    this.products.push(product);
  };

  this.findProduct = function(productName) {
    for (const elem of this.products) {
      if (elem.name === productName) {
        return elem;
      }
    }
  };

  this.addProductAmount = function(productName, num) {
    console.log(`Adding ${num} ${productName}`);

    const product = this.findProduct(productName);
    product.amount += num;
  };

  this.subtractProductAmount = function(productName, num) {
    console.log(`Selling ${num} ${productName}`);

    const product = this.findProduct(productName);
    product.amount -= num;
  };

  this.getAllProducts = function() {
    return this.products;
  };
}

function Manager({ name = 'manager', salesCount = 0 }) {
  this.name = name;
  this.salesCount = salesCount;

  this.sell = function(productName, products) {
    console.log('inside Manager.sell, productName: ', productName);
    console.log('inside Manager.sell, products: ', products);

    console.log(`Selling ${productName}`);

    this.salesCount += 1;
  };
}

const products = [
  { name: 'apples', amount: 100, price: 30 },
  { name: 'grapes', amount: 150, price: 40 },
  { name: 'bananas', amount: 200, price: 50 },
];

const shopA = new Shop({
  products: products,
});

shopA.addManager({
  name: 'Mango',
  salesCount: 10,
});

shopA.addManager({
  name: 'Poly',
  salesCount: 20,
});

shopA.makeSale('Mango', 'apples');
