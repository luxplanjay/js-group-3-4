# Kahoooooot!!!

## Let and Const

### Question 1

Given the following script:

```js
let x = 2;
let x = "hello";

console.log(x);
```

What will print to the console?

* hello
* 2
* undefined
* a 'Duplicate declaration "x"' runtime exception will be thrown

### Question 2

Given the following script:

```js
const x = 1;
const x = "hello";

console.log(x);
```

What will print out to the console?

* 1
* hello
* undefined
* a 'Duplicate declaration "x"' runtime exception will be thrown

### Question 3

Given the following script:

```js
const x;
x = 1;

console.log(x);
```

What will print to the console?

* an 'Unexpected token (1:7)' runtime exception will occur
* 1
* undefined
* 'x'

## Block Scope

### Question 1

Given the following script:

```js
const run = true;
let name = "bob";

if (run) {
  let name = "charley";
  console.log(name);
}

console.log(name);
```

what is printed to the console?

* charley\
  bob
* bob\
  charley
* charley\
  charley
* bob\
  bob

### Question 2

Given the following script:

```js
const MAX = 10;
let amount = 0;

while (amount++ < MAX) {
  let sum = amount;
}

console.log(sum);
```

what is printed to the console?

* 9
* 10
* undefined
* a 'ReferenceError: sum is not defined' runtime exception will be thrown

### Question 3

Given the following script

```js
console.log(x);
const x = 0;
```

what will print to the console?

* undefined
* null
* a 'ReferenceError: x is not defined' runtime exception will be thrown
* 0

### Question 4

Given the following script

```js
console.log(x);
const x = "hello";
```

what will print to the console?

* hello
* null
* undefined
* a 'ReferenceError: x is not defined' runtime exception will be thrown

### Question 5

Given the following script

```js
const MAX = 5;

for (var i = 0; i < MAX; i++) {
  setTimeout(function() {
    console.log(i);
  });
}

for (let i = 0; i < MAX; i++) {
  setTimeout(function() {
    console.log(i);
  });
}
```

What will print to the console?

* 5, 5, 5, 5, 5
  1, 2, 3, 4, 5
* 1, 2, 3, 4, 5
  1, 2, 3, 4, 5
* 0, 0, 0, 0, 0
  0, 0, 0, 0, 0
* a runtime exception will be thrown

## Arrow Functions

### Question 1

Given the following script

```js
x = 10;
y = 10;
vx = 20;
vy = 20;

var obj = {
  x: 0,
  y: 0,
  vx: 5,
  vy: 5,
  update: () => {
    this.x += this.vx;
    this.y += this.vy;
  },
  getPosition: function() {
    return [this.x, this.y];
  }
};

obj.update();

console.log(obj.getPosition());
console.log([x, y]);
```

what will print to the console?

* [5, 5]\
  [10, 10]
* [0, 0]\
  [30, 30]
* [30, 30]\
  [30, 30]
* [5, 5]\
  [30, 30]
* [5, 5]\
  [5, 5]

### Question 2

Given the following script

```js
const person = {
  name: "bob",
  updateName: function() {
    (function() {
      this.name = "suzy";
    })();
  }
};

person.updateName();

console.log(person.name);
```

What will print the console?

* bob
* suzy
* undefined
* null

### Question 3

Given the following script

```js
const person = {
  name: "bob",
  updateName: function() {
    (() => {
      this.name = "suzy";
    })();
  }
};

person.updateName();

console.log(person.name);
```

What prints to the console?

* bob
* suzy
* undefined
* null

### Question 4

Given the following script

```js
const person = {
  age: 10,
  setAge: function(newAge) {
    this.age = newAge;
  },
  refreshAge: function(userId) {
    fetchAgeFromDb(function(newAge) {
      this.setAge(newAge);
    });
  }
};
function fetchAgeFromDb(cb) {
  cb(20);
}

person.refreshAge();

console.log(person.age);
```

What prints out to the console?

* 20
* 10
* a 'this.setAge is not a function' runtime exception is thrown
* undefined

### Question 5

Given the following script:

```js
function ListPrefixer(list, prefix) {
  this.list = list;
  this.prefix = prefix;
}

ListPrefixer.prototype.transform = function(cb) {
  this.list = this.list.map(cb);
};

ListPrefixer.prototype.applyPrefix = function() {
  this.transform(function(number) {
    return this.prefix + number;
  });
};

ListPrefixer.prototype.applyPrefixArrow = function() {
  this.transform(number => {
    return this.prefix + number;
  });
};

const request = new ListPrefixer([1, 2, 3], "*");

request.applyPrefix();
console.log(request.list);

request.applyPrefixArrow();
console.log(request.list);
```

What prints out to the console?

* ['*1', '*2', '*3']\
  ['**1', '**2', '**3']
* ['*1', '*2', '\*3']\
  ['*1', '*2', '\*3']
* [NaN, NaN, NaN]\
  ['*NaN', '*NaN', '\*NaN']
* ['1', '2', '3']\
  ['*1', '*2', '*3']

## Parameter Handling

### Question 1

Given the following script

```js
function add(a = 0, b = 10) {
  return a + b;
}

const sum = add(10);

console.log(sum);
```

What will print to the console?

* 10
* 20
* NaN
* undefined

### Question 2

Given the following script

```js
function User(email, flags = { isActive: false }, numbers = [7, 1]) {
  this.email = email;
  this.flags = flags;
  this.numbers = numbers;
}

const user = new User("testing@gmail.com");

console.log(user);
```

What will print to the console?

* { email: 'testing@gmail.com', flags: { isActive: false }, numbers: [7, 1] }
* { email: 'testing@gmail.com' }
* { email: 'testing@gmail.com', flags: null, numbers: null }
* { email: 'testing@gmail.com', flags: {}, numbers: [] }

### Question 3

Given the following script

```js
function sum(...numbers) {
  return numbers.reduce((acc, number) => acc + number);
}

const answer = sum(1, 5, 20, 10);

console.log(answer);
```

What is printed out to the console?

* 1
* 35
* 30
* 36

### Question 4

Given the following script

```js
function multiplyBy2(base, ...numbers) {
    return numbers.map(number => number \* 2 + base)
}

const answer = multiplyBy2(100, 1, 5, 20, 10);

console.log(answer);
```

What is printed out to the console?

* 102, 110, 140, 120
* [102, 110, 140, 120]
* 200, 2, 10, 40, 20
* [200, 2, 10, 40, 20]

### Question 5

Given the following script

```js
const names = ["bob", ...["donald"], "suzy", "lacy", ...["richard", "alex"]];

console.log(names);
```

what is printed out to the console?

* [ 'bob', 'donald', 'suzy', 'lacy', 'richard', 'alex']
* [ 'bob', 'suzy', 'lacy' ]
* [ 'richard', 'alex' ]
* [ ['bob'], ['donald'], ['suzy', 'lacy'], ['richard', 'alex'] ]

### Question 6

Given the following script

```js
const sum = Math.min(...[1, 5, -1, -10]);

console.log(sum);
```

What is printed to the console?

* [1, 5, -1, -10]
* -10
* -1
* 5

## Template Literals

### Question 1

Given the following script

```js
const names = ["roger", "alex", "bob"];

const message = `Will the following ${
  names.length
} students please report to the office: ${names.join(", ")}`;

console.log(message);
```

What will print to the console?

* Will the following 3 students please report to the office: roger, alex, bob
* Will the following 3 students please report to the office: roger,alex,bob
* Will the following 3 students please report to the office: undefined
* Will the following undefined students please report to the office: undefined

## Enhanced Object

### Question 1

Given the following script

```js
const name = "bob";
const age = 20;
const obj = { name, age };

console.log(obj);
```

What is printed to the console?

* {name: null, age: null}
* {name: 'bob', age: 20}
* ['name', 'age']
* {'bob: null, '20': null}

### Question 2

Given the following script

```js
const confused = "no";
const myKey = confused;
const obj = {
  [myKey]: false
};

console.log(obj);
```

What is printed to the console?

* {'myKey': false}
* {'confused': false}
* {'confused': false}
* {'no': false}

### Question 3

Given the following script

```js
const piece = {
  x: 0,
  y: 0,
  move(x, y) {
    this.x = x;
    this.y = y;
  }
};

piece.move(10, 10);

console.log(piece);
```

What is printed to the console?

* { x: 0, y: 0, move: f() }
* { x: 10, y: 10, move: f() }
* undefined
* null

## Destructing

### Question 1

Given the following script

```js
const [first, , third] = "hello sweet world".split(" ");

console.log(first, third);
```

What is printed to the console?

* 'hello sweet', 'world'
* 'hello', 'world'
* 'hello', 'sweet', 'world'
* 'world'

### Question 2

Given the following script

```js
const { name, age, gender = "m", hairColor: color } = {
  name: "bob",
  age: 20,
  hairColor: "blue"
};

console.log(name, age, gender, color);
```

What prints out to the console?

* undefined, undefined, 'm', 'blue'
* 'bob', 20', undefined, 'blue'
* 'bob', 20', 'm', 'blue'
* a runtime exception will be thrown
