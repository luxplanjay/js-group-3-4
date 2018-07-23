# Webpack 4 Tutorial

`webpack` это сборщих модулей для современных JavaScript-приложений. Когда
`webpack` обрабатывает приложение, он строит граф зависимостей, который включает
в себя каждый модуль который требуется вашему приложению, затем упаковывает все
эти модули в один или несколько файлов.

## Улучшения Webpack 4

- Повышение производительности и более быстрое время сборки (до 98% быстрее)
- Нулевая конфигурация для небольших приложений
- Улучшенный механизм `tree shaking`
- Введение свойства `mode`, которое указывает на тип сборки: `development` или
  `production`

## Webpack 4 без конфигурации

Создаем новый проект. В корне выполянем команду в консоли и инициализируем npm:

```plain
npm init
```

После чего добавляем зависимости:

```plain
npm install webpack webpack-cli
```

Далее в файле `package.json` содаем или дополняем поле `scripts`:

```json
// package.json
{
  "scripts": {
    "start": "webpack --watch --mode development",
    "build": "webpack --mode production"
  }
}
```

Теперь в корне проекта создаем папку `src` а в ней файл `index.js`. Пишем код,
после чего используя скрипты из `package.json` запускаем `webpack` для сборки.

Запустит сборку в `development`-режиме, без минификации и оптимизации, хорошо
использовать при разработке так как собирает быстро. Флаг `--watch` включит
слежение за изменениями в файлах.

```plain
npm start
```

Запустит сборку в `production`-режиме, с минификацией и оптимизацией,
используется при сборке проекта в деплой.

```plain
npm run build
```

В результате будет создана папка `dist` в которой будет лежать файл `main.js`,
это и есть результат работы `webpack`.

На последок создадим в корне проекта папку `public` в которой сделаем файл
`index.html` с тегом `script` указывающим на js-файл из папки `build`

## Webpack сложный

Конфигурация `webpack` может быть невероятно сложная и настраиваемая, но в
основе всего лежат 4 основых концепции:

- Entry
- Output
- Loaders
- Plugins

В корне проекта создадим файл `webpack.config.js` и будем его наполнять.

### Entry

Точка входа указывает, какой файл необходимо использовать чтобы начать строить
граф зависимостей. После входа в точку входа webpack будет определять от каких
других модулей зависит все приложение (прямо и косвенно).

```js
module.exports = {
  entry: './src/index.js',
};
```

### Output

Свойство `output` указывает как назвать и куда положить результат сборки.

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

### Loaders

Загрузчики позволяют `webpack` обрабатывать больше, чем просто JavaScript-файлы.
Они дают возможность использовать `webpack` для всех видов файлов, конвертируя
их в валидные модули, которые может обрабатывать `webpack`. Примерами
загрузчиков могут быть `babel-loader`, `css-loader` и т. д.

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
};
```

### Plugins

В то время как загрузчики используются для преобразования определенных типов
модулей, плагины используются для выполнения каких-то задач на результирующей
сборке, после того как отработали загрузчики. Плагины варьируются от оптимизации
пакетов и минимизации вплоть до определения переменных окружения.

```js
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
```

## Transpiling Javascript ES6 with Babel

Весь современный Javascript в основном написан на `ES6+`, и большинство
браузеров не поддерживают его. Поэтому перед тем как отдавать js браузеру,
необходимо преобразовать `ES6+` код в `ES5`.

Webpack не знает как сделать это преобразование, поэтому нам нужны загрузчики,
чтобы помоч ему выполнить эту работу.

`babel-loader` - это загрузчик для преобразования `ES6+` в `ES5`. Поэтому
необходимо уставновить зависимости

```plain
npm install --save-dev babel-loader babel-core babel-preset-env
```

Дополним конфигурацию `webpack.config.js`

```js
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
```

## Webpack Dev Server

```plain
npm i --save-dev webpack-dev-server
```

```json
// package.json
{
  "scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  }
}
```
