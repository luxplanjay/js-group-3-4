'use strict';

//=================
// let counter = 0;

// while (counter < 10) {
//   console.log('counter: ', counter);

//   counter = counter + 1;
// }

// console.log('after while');

// =========================
// const numbers = [12, 75, 90, 7, 23, 14];
// let i = 0;

// while (i < numbers.length) {
//   console.log( numbers[i] );

//   i = i + 1;
// }

//================

// const max = 10;
// const min = 1;
// let userInput;
// let num;
// let inRange = false;

// do {
//   userInput = prompt(`Дай число от ${min} до ${max}`);

//   num = Number(userInput);
//   inRange = num >= min && num <= max;
// } while (userInput !== null && !inRange);

// =========================
// const numbers = [12, 75, 90, 7, 23, 14];

// const length = numbers.length;
// let a = 5;
// let b = 10;
// let a = 5, b = 10;

// const newNumbers = [];

// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   if (numbers[i] < 50) {
//     newNumbers.push(numbers[i]);
//   }
// }

// console.log(numbers);
// console.log(newNumbers);

// ===========================

// const numbers = [12, 75, 90, 7, 23, 14];
// const newNumbers = [];

// for (let item of numbers) {
//   if (item < 50) {
//     newNumbers.push(item);
//   }
// }

// console.log(numbers);
// console.log(newNumbers);

//=================
// const numbers = [12, 75, 90, 7, 23, 14];

// const userInput = Number(prompt('Давай число!'));

// let hasNumber = false;

// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   if (numbers[i] === userInput) {
//     hasNumber = true;
//     break;
//   }
// }

// console.log(hasNumber);

// const message = hasNumber
//   ? 'Есть такое число!'
//   : 'Такого числа нет';

// console.log(message);

// ======================

// const numbers = [[12, 5, 7], [18, 9, 14, 46], [24, 8]];
// numbers[0][0]

// const flatArr = [];

// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   console.log('i: ', i);
//   console.log('numbers[i]: ', numbers[i]);

//   for (let j = 0, max = numbers[i].length; j < max; j += 1) {
//     console.log('j: ', j);
//     console.log('numbers[i][j]]: ', numbers[i][j]);
//     flatArr.push(numbers[i][j]);
//   }
// }

// console.log('flatArr: ', flatArr);

// ===============================
// const numbers = [[12, 5, 7], [18, 9, 14, 46], [24, 8]];
// const arr = [];

// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   for (let j = 0, max = numbers[i].length; j < max; j += 1) {
//     if (numbers[i][j] > 10) {
//       arr.push(numbers[i][j]);
//     }
//   }
// }

// console.log('arr: ', arr);

//=============================

// const numbers = [[12, 5, 7], [18, 9, 14, 46], [24, 8]];
// const value = 14;
// let hasNumber = false;

// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   if (hasNumber) {
//     break;
//   }

//   for (let j = 0, max = numbers[i].length; j < max; j += 1) {
//     if (value === numbers[i][j]) {
//       hasNumber = true;
//       break;
//     }

//     console.log('second for');
//   }

//   console.log('first for');
// }

// const message = hasNumber ? 'Есть такое число!' : 'Такого числа нет';

// console.log(message);

//=====================
// const logins = ['Mango', 'Poly', 'Ajax'];

// let str = logins[0];

// const arr = str.split('');
// arr[0] = arr[0].toLowerCase();
// str = arr.join('');
// logins[0] = str;

// console.log(str);
// console.log(logins);

// const min = 3;
// const max = 6;

// let userInput = prompt('Давай логин!');

// if (userInput !== null) {
//   const inRange = userInput.length >= min && userInput.length <= max;

//   if (inRange) {
//     console.log('начинаем поиск имени');

//     userInput = userInput.toLowerCase(); // ajax
//     const arr = userInput.split(''); // ['a', 'j', 'a', 'x']
//     arr[0] = arr[0].toUpperCase(); // ['A', 'j', 'a', 'x']
//     userInput = arr.join(''); // Ajax

//     console.log(userInput);

//     // const hasLogin = logins.includes(userInput);

//     let hasLogin = false;

//     for (const login of logins) {
//       if (login === userInput) {
//         hasLogin = true;
//         break;
//       }
//     }

//     const message = hasLogin ? 'Есть такой логин!' : 'Такого логина нет';

//     console.log(message);
//   } else {
//     console.log(`Кол-во символов не входит в промежуток от ${min} до ${max}`);
//   }
// } else {
//   console.log('ну и ладно, пока!');
// }

//=============================
// const userInput = prompt('Дай число от больше либо равно 0');

// if(userInput !== null) {
//   const asNumber = Number(userInput);
//   console.log('ДА!');
// } else {
//   console.log('нажат cancel');
// }

/*

  Есть массив паролей зарегистрированных пользователей passwords.
  При посещении страницы, необходимо попросить пользователя ввести свой пароль.
  Необходимо проверить содержит ли массив passwords пароль введенный пользователем.

  Пароль можно ввести не верно всего 3 раза (кол-во раз может изменяться).
  Если был введен существующий пароль, вывести alert с текстом 'Добро пожаловать!'.
  Если был введен не существующий пароль, отнять от лимита попыток единицу,
  вывести alert с текстом "Неверный пароль, у вас осталось n попыток",
  где n это оставшийся лимит.
  После того как пользователь закрыл alert, запросить пароль снова.
  Продолжать запрашивать пароль до тех пор, пока пользователь
  не введет существующий пароль, пока не кончатся попытки
  или пока пользователь на нажмет Cancel в prompt.
  Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
  Если же пользователь нажмет Cancel, прекратить выполнение скрипта.
*/

/*
  * Цикл в котором спрашиваем пароль
    * Спрашиваем пароль
      * Если ввели !null или кол-во попыток не равно нулю или ввели не верный пароль
        * Спрашиваем пароль
        * Проверить содержит ли массив такой пароль
          * Если содержит, закончить цикл
          * Если не содержит продолжить
      * Если ввели null закончить цикл
      * Если закончились попытки закончить цикл
      * Если ввели верный пароль закончить цикл
*/

//===========

// let attempts = 3;
// let userInput;

// while (userInput !== null && attempts !== 0) {
//   attempts -= 1;
//   console.log(attempts);

//   userInput = prompt('Давай пароль');
// }
