'use strict';

const promise = new Promise((onResolve, onReject) => {
  setTimeout(() => {
    onResolve(5);
    // onReject('promise rejected!');
  }, 500);
});

// promise
//   .then(value => {
//     console.log(value);

//     return value * 2;
//   })
//   .then(x => console.log(x));

// const resolved = value => {
//   console.log(value);
//   return value * 2;
// };

// const rejected = error => console.log(error);

// promise
//   .then(value => {
//     console.log('first then:', value);

//     const innerPromise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(value * 5);
//       }, 2000);
//     });

//     return innerPromise;
//   })
//   .then(resolved)
//   .then(resolved)
//   .catch(err => console.log('error: ', err));

//==================================
// const checkNumber = num => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num % 2 === 0) {
//         resolve('Even!!!! Success!!!');
//       }
//       reject('Odd!!!!! Fail!!!');
//     }, 1000);
//   });
// };

// const promise = checkNumber(4);

// promise
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

//=====================================
const DISTANCE = 1000;

const race = (name, speed) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`[${name}] crossed the finish line!`);
    }, (DISTANCE / speed) * 1000);
  });
};

const mango = race('mango', 900);
// mango.then(res => console.log(res));

const poly = race('poly', 500);
// poly.then(res => console.log(res));

const ajax = race('ajax', 700);
// ajax.then(res => console.log(res));

// Promise.all([ajax, mango, poly])
//   .then(arr => console.log(arr))
//   .catch(err => console.log(err));

// Promise.race([ajax, mango, poly])
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// =======================================================
// console.log('before');

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => console.log('data inside then: ', data))
//   .catch(err => alert('Error!' + err));

// console.log('after');
