'use strict';


// как source разбивается при копиляции в шаблон
// function template (obj) {
// return '<div class="cat"><img src="' + obj.img + '" alt="cute cat"><h2>Name: ' + obj.name + '</h2><p>Age: ' + obj.age + '</p></div>';
// }

/**
 * Рендерим объект, кота :)
 */
const poly = {
  name: 'Poly',
  age: 2,
  img:
    'https://www.rd.com/wp-content/uploads/2016/04/01-cat-wants-to-tell-you-laptop.jpg',
};

// const root = document.querySelector('#root');
// const source = document.querySelector('#cat-card').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = template(poly);

// root.insertAdjacentHTML('afterbegin', markup);

/**
 * Рендерим список котов!
 * https://handlebarsjs.com/builtin_helpers.html
 */
const cats = [
  { name: 'Poly', age: 4, joyful: true, traits: ['fuzzy', 'cute'] },
  { name: 'Spot', age: 2, joyful: false, traits: ['cute', 'cuddly'] },
  { name: 'Frisky', age: 3, joyful: true, traits: ['sleepy', 'bites'] },
  { name: 'Biscuit', age: 1, joyful: false, traits: ['fuzzy', 'sleepy'] },
  { name: 'Ajax', age: 6, joyful: true, traits: ['fuzzy', 'sleepy'] },
];

// const list = document.querySelector('.cats-list');
// const source = document.querySelector('#cats-list-tpl').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = template({ cats });

// list.insertAdjacentHTML('afterbegin', markup);

/**
 * Ренденим блюда
 */
const dishes = [
  {
    name: 'Baked Yak & Mushrooms',
    image: 'http://lorempixel.com/640/480/food',
    descr:
      'Beatae sint quasi quo exercitationem vel ea distinctio. Quae eveniet porro aspernatur debitis eos accusamus est harum.',
    price: '61.00',
    available: true,
  },
  {
    name: 'Roasted Oysters',
    image: 'http://lorempixel.com/640/480/food',
    descr:
      'Consequatur maiores eos sunt ea commodi laboriosam. Esse est et quia voluptatem voluptatem quia deleniti et ut.',
    price: '32.00',
    available: false,
  },
  {
    name: 'Strawberry Pancakes',
    image: 'http://lorempixel.com/640/480/food',
    descr:
      'Aut tenetur ipsa. Ex voluptate qui aut porro numquam voluptas autem.',
    price: '21.00',
    available: true,
  },
  {
    name: 'Caramel Toffee',
    image: 'http://lorempixel.com/640/480/food',
    descr:
      'Eum fuga sequi earum voluptas voluptas necessitatibus ut. Labore animi sed maxime animi quia eum magnam et provident.',
    price: '33.00',
    available: false,
  },
  {
    name: 'Strawberry Pancakes',
    image: 'http://lorempixel.com/640/480/food',
    descr:
      'Dolores sed vero voluptatem voluptatem architecto officiis praesentium. Dolores quasi facere incidunt sint eos omnis delectus officia.',
    price: '14.00',
    available: false,
  },
  {
    name: 'Caramel Toffee',
    image: 'http://lorempixel.com/640/480/food',
    descr:
      'Ea eveniet vel omnis veniam et perspiciatis quod doloribus voluptas. Autem at est molestiae repellendus.',
    price: '84.00',
    available: true,
  },
  {
    name: 'Roasted Orange',
    image: 'http://lorempixel.com/640/480/food',
    descr:
      'Deserunt quas nostrum qui qui sunt qui dolores. Culpa facere et voluptatem nobis laudantium aperiam aliquid.',
    price: '63.00',
    available: true,
  },
  {
    name: 'Pistachio Elderberry Wafer',
    image: 'http://lorempixel.com/640/480/food',
    descr:
      'Optio ut eum necessitatibus dolores molestias. Tenetur libero harum nobis a est et voluptatem rerum officia.',
    price: '67.00',
    available: false,
  },
  {
    name: 'Chocolate Pie',
    image: 'http://lorempixel.com/640/480/food',
    descr:
      'Et cum et ut quis quas maiores consequatur. Iure qui unde sint consequatur qui iusto at sit.',
    price: '26.00',
    available: false,
  },
];

const grid = document.querySelector('.grid');
const source = document.querySelector('#dish-card').innerHTML.trim();
const template = Handlebars.compile(source);

// const markup = template(dishes[0]);

const markup = dishes.reduce((acc, dish) => acc + template(dish), '');

console.log(markup);
grid.insertAdjacentHTML('afterbegin', markup);



// const form = document.querySelector('.form');
// const input = form.querySelector('input');

// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   console.log(input.value);
// });
