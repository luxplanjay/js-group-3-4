/*
  Приведение к логическому типу

  Запомните 7 ложных ( falsy) значений,
  приводящих к false :

  0, -0, NaN, null, undefined,
  пустая строка: "" или '', false
*/

// const bool = Boolean();

// console.log(bool);

/*
  Логические операторы: И - &&, ИЛИ - ||, НЕ - !

  ---------------10-----------------30---------------
*/

// const num = 15;

// // const isInRange = num >= 10 && num <= 30;

// const isInRange = num <= 10 || num >= 30;

// console.log(isInRange);

// const num = Number(prompt('enter a number!'));

// const isNotValidNumber = Number.isNaN(num);

// console.log(isNotValidNumber);

/*
  Ветвление - это возможность выполнить ту или
  иную последовательность кода в зависимости от
  условия. В JavaScript условие может быть любым,
  но результат проверки условия всегда имеет два
  значения - true или false.

  https://habrahabr.ru/post/74330/
  http://www.its.kpi.ua/itm/tkot/Students/Lec2_3_Acvitity[p].pdf
*/

// Получить от пользователя число,
// и проверить входит ли оно в идапазон от 10 до 30
// вывести лог с результатом

// ---------------10-----------------30---------------

// const num = Number(prompt('введите число от 10 до 30'));

// const isInRange = num >= 10 && num <= 30;

// if (isInRange) {
//   console.log('Отлично! число подходит!');
// } else {
//   console.log('Все плохо! число не подходит!');
// }

// кофе продаем, разные размеры стаканов

// const SIZE_SMALL = 0;
// const SIZE_MEDIUM = 1;
// const SIZE_LARGE = 2;

// const input = Number(prompt('0 - small, 1 - medium, 2 - large', 1));

// if (input === SIZE_SMALL) {
//   console.log('готовим маленький кофе');
// } else if (input === SIZE_MEDIUM) {
//   console.log('готовим средний кофе');
// } else if (input === SIZE_LARGE) {
//   console.log('готовим большой кофе');
// } else {
//   console.log('такого кофе нет');
// }

// попросить у пользователя число
// если оно больше 10 записать в переменную
// message строку 'ура, больше 10!'
// в противном случае, все плохо!

// const input = Number(prompt('введите число больше 10'));

// let message = input > 10 ? 'ура, больше 10!' : 'все плохо!';

// if (input > 10) {
//   message = 'ура, больше 10!';
// } else {
//   message = 'все плохо!';
// }

// alert(message);

// кофе продаем, разные размеры стаканов

// const SIZE_SMALL = 0;
// const SIZE_MEDIUM = 1;
// const SIZE_LARGE = 2;

// const coffeeSize = Number(prompt('0 - small, 1 - medium, 2 - large', 1));

// switch (coffeeSize) {
//   case SIZE_SMALL:
//     console.log('готовим маленький кофе');
//     break;
//   case SIZE_MEDIUM:
//     console.log('готовим средний кофе');
//     break;
//   case SIZE_LARGE:
//     console.log('готовим большой кофе');
//     break;
//   default:
//     console.log('такого кофе нет');
// }

// if (input === SIZE_SMALL) {
//   console.log('готовим маленький кофе');
// } else if (input === SIZE_MEDIUM) {
//   console.log('готовим средний кофе');
// } else if (input === SIZE_LARGE) {
//   console.log('готовим большой кофе');
// } else {
//   console.log('такого кофе нет');
// }

/*
  Написать скрипт кофейного магазина.

  Пользователь вводит выбор размера кофе.

  Если есть сказать сколько стоит и попросить денег.

  Проверить что пользователь дал достаточно денег.

  Если не достаточно то сказать что не достаточно.
*/

const SIZE_SMALL = 0;
const SIZE_MEDIUM = 1;
const SIZE_LARGE = 2;

const PRICE_SMALL = 50;
const PRICE_MEDIUM = 100;
const PRICE_LARGE = 150;

const userInput = prompt('0 - small, 1 - medium, 2 - large', 1);
const coffeeSize = Number(userInput);

const isValidInput = userInput !== null && !Number.isNaN(coffeeSize);

if (isValidInput) {
  let haveCoffee;
  let size;
  let price;

  switch (coffeeSize) {
    case SIZE_SMALL:
      haveCoffee = true;
      size = 'small';
      price = PRICE_SMALL;
      break;

    case SIZE_MEDIUM:
      haveCoffee = true;
      size = 'medium';
      price = PRICE_MEDIUM;
      break;

    case SIZE_LARGE:
      haveCoffee = true;
      size = 'large';
      price = PRICE_LARGE;
      break;

    default:
      haveCoffee = false;
  }

  if (haveCoffee) {
    const userCash = Number(prompt(`Заказан ${size}, с тебя ${price}`));

    if (userCash >= price) {
      const change = userCash - price;

      alert(`Вот ваш ${size} кофе! Сдача: ${change}`);
    } else {
      alert('А денег то не хватило!');
    }
  } else {
    alert('Такого кофе нет!');
  }
} else {
  alert('Невалидный ввод!!!');
}
