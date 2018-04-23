'use strict';

// const users = ['Mango', 'Ajax', 'Poly'];

// console.log('users arr: ', users);
// console.log('users.length: ', users.length);

// users.length = 1;

// console.log(users);

// if (users.length === 0) {
//   console.log('empty');
// } else {
//   console.log('not empty');
// }

// users[5] = 'Chelsey';

// console.log('users arr: ', users);
// console.log('users.length: ', users.length);

// console.log(users[5]);

// users.length = 1000;

// console.log(users);

// ================ Методы
// const users = ['Mango', 'Ajax', 'Poly'];

// const userInput = prompt('Введите товары через запятую');
// console.log(userInput);
// const goods = userInput.split(', ');
// console.log(goods);

// console.log(users);
// const asString = users.join('');
// console.log(asString);

// const userInput = prompt('давай имя');
// const hasUser = users.includes(userInput);
// console.log(hasUser);

// const users = ['Mango', 'Ajax', 'Poly'];

// users.push('Chelsey');
// users.push('Huga');
// console.log(users);

// users.pop();
// users.pop();
// users.pop();

// const deletedEl = users.pop();
// console.log( deletedEl );
// console.log(users);

// ===========

// const guests = ['Mango', 'Poly'];
// console.log(guests);

// const guestName = prompt('давай имя');
// guests.push(guestName);

// console.log(guests);

//=============
// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// const someUsers = users.slice(2);
// console.log('someUsers: ', someUsers);

// console.log('users: ', users);

// ==================
// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// console.log('users: ', users);

// Array.splice(position, num)
// console.log( users.splice(2, 1) );

// console.log(users);

// ==================
// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// console.log(users);
// Array.splice(position, 0, el1, el2, ...)

// users.splice(2, 0, 'Alex', 'Singu');

// console.log(users);

// === найти элемент массива по значению и вырезать его
// const numbers = [3, 7, 8, 12];

// console.log(numbers);

// const idx = numbers.indexOf(12);
// console.log(idx);
// // Array.splice(position, num)
// console.log( numbers.splice(idx, 1) );
// console.log(numbers);

//======================
// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// console.log(users);

// users.splice(1, 1, 'Alex');

// console.log(users);

//========== удаляем пользователя по имени

// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// const userName = prompt('Имя для удаления!');

// if (userName !== null) {
//   const hasName = users.includes(userName);

//   if (hasName) {
//     const idx = users.indexOf(userName);
//     users.splice(idx, 1);
//     console.log(`Элемент ${userName} удален: `, users);
//   } else {
//     console.log('Такого пользователя нет, ошибка!');
//   }
// }

//========= concat

// const a = [1, 2, 3];
// const b = [4, 5, 6];

// const c = a.concat(b);

// console.log(a);
// console.log(b);

// console.log(c);

// const clients = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// const first = clients[0];
// const rest = clients.slice(1);
// console.log(first);
// console.log(rest);

// const [first, second, ...rest] = clients;

// console.log(first);
// console.log(second);
// console.log(rest);
