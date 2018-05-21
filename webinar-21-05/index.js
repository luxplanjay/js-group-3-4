// https://docs.google.com/spreadsheets/d/1c3uNBep2u9_ccjssFTfE6fEsTSacf2DuQs_KGK-LPNw/edit?usp=sharing

/*
  https://hackernoon.com/inheritance-in-javascript-21d2b82ffa6f
  https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript
  https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9
*/

// 'use strict';
// function User(name) {
//   this.name = name;
// }

// User.prototype = {
//   constructo: User,
// };

// User.prototype.showName = function() {
//   console.log(this.name);
// };

// User.prototype.changeName = function(name) {
//   this.name = name;
// };

// console.log('User.prototype: ', User.prototype);

// const mango = new User('mango');

// mango.showName();
// mango.changeName('Poly');
// mango.showName();

// console.log(mango);

// Ссылка в поле __proto__, всех экземпляров созданных от главного родителя,
// берется из Родитель.prototype

/*
  Hero class
*/
const Hero = function(name, level) {
  this.name = name;
  this.level = level;
};

Hero.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
};

/*
  Warrior class, extends Hero
*/
const Warrior = function(name, level, weapon) {
  Hero.call(this, name, level);

  this.weapon = weapon;
};

Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function() {
  console.log(`${this.name} attacks with an ${this.weapon}.`);
};

/*
  Berserker class, extends Warrior
*/
const Berserker = function(name, level, weapon, battlecry) {
  Warrior.call(this, name, level, weapon);
  this.battlecry = battlecry;
};

Berserker.prototype = Object.create(Warrior.prototype);
Berserker.prototype.constructor = Berserker;

Berserker.prototype.shout = function() {
  console.log(this.battlecry);
};

const bers = new Berserker('mango', 666, 'axe', 'Whhhaaaaaah');

console.log(bers);
bers.greet();
bers.attack();
bers.shout();
