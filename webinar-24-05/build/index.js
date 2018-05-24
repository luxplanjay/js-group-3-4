'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://docs.google.com/spreadsheets/d/1c3uNBep2u9_ccjssFTfE6fEsTSacf2DuQs_KGK-LPNw/edit?usp=sharing

function sumArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('передали не массив');
  }

  return arr.reduce(function (acc, val) {
    return acc + val;
  }, 0);
}

try {
  console.log('hello');
  console.log(sumArray([1, 2, 3]));
} catch (e) {
  console.log(e);
}

try {
  console.log(sumArray('hello'));
} catch (e) {
  console.log(e);
}

console.log('qweqweqwe');

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

var HeroClass = function () {
  function HeroClass(name, level) {
    _classCallCheck(this, HeroClass);

    this._name = name;
    this._level = level;
  }

  _createClass(HeroClass, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
    /**
     *
     *
     * @param {Number} level
     * @memberof HeroClass
     */

  }, {
    key: 'setLevel',
    value: function setLevel(level) {
      this.level = level;
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
  }, {
    key: 'level',
    set: function set(level) {
      this._level = level;
    }
  }], [{
    key: 'sayHi',
    value: function sayHi() {
      console.log('aloha');
    }
  }]);

  return HeroClass;
}();
/**
 *
 *
 * @class WarriorClass
 * @extends {HeroClass}
 */


HeroClass.x = 5;

var WarriorClass = function (_HeroClass) {
  _inherits(WarriorClass, _HeroClass);

  /**
   * Creates an instance of WarriorClass.
   * @param {String} name
   * @param {Number} level
   * @param {String} weapon
   * @memberof WarriorClass
   */
  function WarriorClass(name, level, weapon) {
    _classCallCheck(this, WarriorClass);

    var _this = _possibleConstructorReturn(this, (WarriorClass.__proto__ || Object.getPrototypeOf(WarriorClass)).call(this, name, level));

    _this.weapon = weapon;
    return _this;
  }

  _createClass(WarriorClass, [{
    key: 'attack',
    value: function attack() {
      console.log(this.name + ' attacks with ' + this.weapon);
    }
  }]);

  return WarriorClass;
}(HeroClass);

var x = new WarriorClass('x', 2, 'axe');

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

Hero.prototype.getName = function () {
  return this.name;
};

Hero.prototype.setLevel = function (level) {
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

Warrior.prototype.attack = function () {
  console.log(this.name + ' attacks with ' + this.weapon);
};

/*
{
  __proto__: Hero.prototype,
  attack: f()
}
 */

// const poly = new Warrior('poly', 1, 'axe');

// console.log(poly);