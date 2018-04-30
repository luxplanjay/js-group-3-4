'use strict';

// const mutiply = function (x, y) {
//   console.log('x: ', x);
//   console.log('y: ', y);
//   console.log('inside multiple fn');

//   const result = x * y;

//   return result;
// };

// console.log(mutiply);
// const z = mutiply(5, 10);
// console.log(z);

// ==========================

// const findNumbers = function(arr, value) {
//   const numbers = [];

//   for (let item of arr) {
//     if (item > value) {
//       numbers.push(item);
//     }
//   }

//   return numbers;
// };

// const arr1 = [12, 5, 46, 78, 4];
// const newArr1 = findNumbers(arr1, 15);
// console.log(newArr1);

// const arr2 = [17, 15, 146, 278, 890];
// const newArr2 = findNumbers(arr2, 25);
// console.log(newArr2);

// ================

// const multiply = function(a, b) {
//   return a * b;
// };

// const square = function(x) {
//   const result = multiply(x, x);
//   return result;
// };

// const printSquare = function(n) {
//   const result = square(n);

//   console.log(result);
// };

// printSquare(4);

// ===================

// const fnA = function() {
//   console.log('a');
// };

// const fnB = function() {
//   console.log('b');
// };

// const fnC = function() {
//   fnB();
//   fnA();
//   console.log('c');
// };

// fnC();

// ===============
// const globarVar = 123123;

// const fnY = function() {
//   let z = 15;

//   const fnZ = function() {
//     console.log(z);
//     console.log(globarVar);
//   };

//   fnZ();

//   return z;
// };

// fnY();

// let x = 10;

// const fnX = function() {
//   let y = 5;

//   console.log(fnY());
// };

// fnX();

// ================

// let x = 5;

// const fn = function() {
//   let x = 10;

//   console.log(x);
// };

// fn();

// console.log(x);

// ========================

// const findLargestNumber = function(arr) {
//   let largestNumber = arr[0];

//   for (let i = 1, max = arr.length; i < max; i += 1) {
//     const elem = arr[i];

//     if (largestNumber < elem) {
//       largestNumber = elem;
//     }
//   }

//   return largestNumber;
// };

// const transformArray = function(arr) {
//   const newArr = [];

//   for (let item of arr) {
//     newArr.push(Number(item));
//   }

//   return newArr;
// };

// const getUserInput = function() {
//   const input = prompt('Введите числа через запятую');

//   if (input === null) {
//     return;
//   }

//   const arr = input.split(',');
//   const transformedArr = transformArray(arr);

//   return transformedArr;
// };

// const userInput = getUserInput();
// const num = findLargestNumber(userInput);

// console.log(num);

// =========================

const summ = function(...args) {
  // const args = Array.from(arguments);

  // const args = [...arguments];

  console.log('arguments: ', arguments);
  console.log('args: ', args);

  let result = 0;

  for (let item of arguments) {
    result += item;
  }

  return result;
};

console.log(summ(1, 2, 3, 4, 5, 6, 11, 22, 33));
