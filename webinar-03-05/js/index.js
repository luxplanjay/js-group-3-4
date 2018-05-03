'use strict';

// const fn = (...args) => {
//   console.log(args);
// };

// fn(1, 2, 3, 4, 5, 6, 7);

// ===========================
// const hasElement = (arr, el) => {
//   const result = arr.includes(el);
//   return result;
// };

// const hasElement = (arr, el) => {
//   return arr.includes(el);
// };

// const hasElement = (arr, el) => arr.includes(el);

// const x = hasElement([1, 2, 3], 123);

// console.log(x);

//================================

// const logger = function(val) {
//   console.log('Logger output: ', val);
// };

// const findNumber = function(arr, num, callback) {
//   const hasNumber = arr.includes(num);

//   if (hasNumber) {
//     callback('нашли');
//   } else {
//     callback('не нашли');
//   }
// };

// const numbers = [1, 2, 3, 4, 5];

// findNumber(numbers, 3, logger);

// ============================

// const showSuccess = () => console.log('SUCCESS!');
// const showError = () => console.log('ERROR!');
// const showGoodbye = () => console.log('GOODBYE!');

// const getNumber = function(onCancel, onError, onSuccess) {
//   if (
//     typeof onCancel !== 'function' ||
//     typeof onError !== 'function' ||
//     typeof onSuccess !== 'function'
//   ) {
//     console.log('колбек не функция!');
//     return;
//   }

//   const input = prompt('Давай число от 1 до 5');

//   if (input === null) {
//     onCancel();
//     return;
//   }

//   if (input < 1 || input > 5) {
//     onError();
//     return;
//   }

//   onSuccess();
// };

// getNumber(showGoodbye, showError, showSuccess);

// ==================

// (function() {
//   let a = 15;

//   console.log('a inside index.js: ', a);
// })();

// (function() {
//   let input = 5;
//   console.log(input + 5);
// })();

// (function() {
//   let input = 10;
//   console.log(input + 10);
// })();

// (function() {
//   const arr = [1, 2, 3];
//   ///////////
// })();

// (function() {
//   const arr = [3, 4, 5];
//   /////////
// })();

// (function() {
//   const arr = [6, 7, 9];
//   ////////////
// })();

// const x = (function(a, b, c) {
//   return a + b + c;
// })(5, 1, 2);

// console.log(x);

// ====================================

// const privateCounter = function() {
//   let counter = 0;
//   //LexicalEnv = {x: 0}

//   return function() {
//     counter += 1;
//     console.log(counter);
//   };
// };

// const counter1 = privateCounter();
// counter1();
// counter1();
// counter1();
// counter1();

// const counter2 = privateCounter();
// counter2();
// counter2();
// counter2();

// ================

// const numbers = [1, [2, [3]], [4, [5, 6, [7, [8, 9, [10, 11]]]]]];

// const flatten = function self(arr) {
//   console.log('Self call arr: ', arr);
//   let flatArr = [];

//   for (let elem of arr) {
//     const isArray = Array.isArray(elem);

//     if (isArray) {
//       flatArr = flatArr.concat(self(elem));
//     } else {
//       flatArr.push(elem);
//     }
//   }

//   return flatArr;
// };

// const flat = flatten(numbers);
// console.log(flat);


//=========================
function removeFromArray(arr, ...values) {
  // const args = Array.from(arguments)
  // console.log(args);

  // const arr = args[0];
  // const values = args.slice(1);

  // console.log(values);

  // console.log(arr);

  // console.log(arr);
  // console.log(values);

}
// Вызовы функции для проверки
// console.log(
//   removeFromArray([1, 2, 3, 4, 5], 2, 4, 123, 666)
// ); // вернет [1, 3, 5]
