// https://docs.google.com/spreadsheets/d/1c3uNBep2u9_ccjssFTfE6fEsTSacf2DuQs_KGK-LPNw/edit?usp=sharing

function sumArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('передали не массив');
  }

  return arr.reduce((acc, val) => acc + val, 0);
}

try {
  console.log('hello')
  console.log(sumArray([1, 2, 3]));
} catch (e) {
  console.log(e);
}

try {
  console.log(sumArray('hello'));
} catch (e) {
  console.log(e);
}

console.log('qweqweqwe')

// const numbers = [1, 2, 3];

// Array.prototype.getFirst = function() {
//   return this[0];
// };

// console.log(
//   [2, 3, 4, 5].getFirst()
// );

// console.log(
//   numbers.getFirst()
// )
class HeroClass {
  constructor(name, level) {
    this._name = name;
    this._level = level;
  }

  get name() {
    return this._name;
  }

  set level(level) {
    this._level = level;
  }

  static sayHi() {
    console.log('aloha');
  }

  static x = 5;

  getName() {
    return this.name;
  }
  /**
   *
   *
   * @param {Number} level
   * @memberof HeroClass
   */
  setLevel(level) {
    this.level = level;
  }
}
/**
 *
 *
 * @class WarriorClass
 * @extends {HeroClass}
 */
class WarriorClass extends HeroClass {
  /**
   * Creates an instance of WarriorClass.
   * @param {String} name
   * @param {Number} level
   * @param {String} weapon
   * @memberof WarriorClass
   */
  constructor(name, level, weapon) {
    super(name, level);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
  }
}

const x = new WarriorClass('x', 2, 'axe');

x.level = 10;

console.log(x);

function Hero(name, level) {
  // this = {}
  // this.__proto__ = Hero.prototype
  this.name = name;
  this.level = level;
}

// Hero.sayHi = function() {
//   console.log('hello');
// };

// Hero.sayHi();

// Hero.x = 5;

Hero.prototype.getName = function() {
  return this.name;
};

Hero.prototype.setLevel = function(level) {
  this.level = level;
};

// const mango = new Hero('mango', 1);

// console.log(mango.getName());

// mango.setLevel(666);

// console.log(mango);

function Warrior(name, level, weapon) {
  // this = {}
  // this.__proto__ = Warrior.prototype
  Hero.call(this, name, level);
  this.weapon = weapon;
}

Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

/*
  {
    __proto__: Hero.prototype
  }
*/

Warrior.prototype.attack = function() {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

/*
{
  __proto__: Hero.prototype,
  attack: f()
}
 */

// const poly = new Warrior('poly', 1, 'axe');

// console.log(poly);
