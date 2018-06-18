'use strict';

// ========================================
// Счетчик через класс с интервалом
// ========================================
// const clockface = document.querySelector('.js-clockface');
// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');

// class Timer {
//   constructor({
//     startValue = 0,
//     delay = 1000,
//     onTick = val => console.log(val),
//   }) {
//     this.value = startValue;
//     this.timerid = null;
//     this.delay = delay;
//     this.isActive = false;
//     this.onTick = onTick;
//   }

//   start() {
//     if (!this.isActive) {
//       this.isActive = true;

//       this.timerId = setInterval(() => {
//         this.value += 1;
//         this.onTick(this.value);
//       }, this.delay);
//     }
//   }

//   stop() {
//     this.isActive = false;
//     clearInterval(this.timerId);
//     this.timerId = null;
//     this.value = 0;
//     this.onTick(this.value);
//   }
// }

// const timer = new Timer({
//   startValue: 0,
//   delay: 200,
//   onTick: updateClockface,
// });

// startBtn.addEventListener('click', timer.start.bind(timer));
// stopBtn.addEventListener('click', timer.stop.bind(timer));

// function updateClockface(val) {
//   clockface.textContent = val;
// }

// const timer = {
//   value: 0,
//   timerId: null,
//   isActive: false,
//   start(callback) {
//     if (!this.isActive) {
//       this.isActive = true;

//       this.timerId = setInterval(() => {
//         this.value += 1;
//         callback(this.value);
//       }, 500);
//     }
//   },
//   stop(callback) {
//     this.isActive = false;
//     clearInterval(this.timerId);
//     this.timerId = null;
//     this.value = 0;
//     callback(this.value);
//   },
// };

// ========================================
// Работа с Date
// ========================================
// const date = new Date(2048, 11, 32, 14, 30, 0, 0);

// console.log(date);

// const date = new Date(1000000000000);

// console.log(date);

// const date = new Date();

// console.log('date: ', date);
// console.log('getDate: ', date.getDate());
// console.log('getMonth(): ', date.getMonth());
// console.log('getTime(): ', date.getTime());

// console.log('getHours(): ', date.getHours());
// console.log('getMinutes(): ', date.getMinutes());
// console.log('getSeconds(): ', date.getSeconds());
// console.log('getMilliseconds(): ', date.getMilliseconds());

// ========================================
// Таймер-макароны
// ========================================

// const counter = 0;
// let startTime = Date.now();
// let deltaTime = 0;
// const clockface = document.querySelector('.js-clockface');

// let minutes;
// let seconds;
// let milliseconds;

// setInterval(() => {
//   const currentTime = Date.now();

//   deltaTime = currentTime - startTime;

//   const time = new Date(deltaTime);

//   minutes = time.getMinutes();
//   seconds = time.getSeconds();
//   milliseconds = Number.parseInt(time.getMilliseconds() / 100);

//   clockface.textContent = `${minutes}:${seconds}:${milliseconds}`;
//   // const time = new Date(deltaTime);

//   // console.log('seconds: ', time.getSeconds());

//   // console.log('deltaTime: ', deltaTime);
// }, 100);

// ========================================
// Таймер через класс
// ========================================

const clockface = document.querySelector('.js-clockface');
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');

class Timer {
  constructor({ onTick }) {
    this.startTime = null;
    this.deltaTime = null;
    this.timerId = null;
    this.isActive = false;
    this.onTick = onTick;
  }

  start() {
    if (!this.isActive) {
      this.isActive = true;
      this.startTime = Date.now();

      this.timerId = setInterval(() => {
        const currentTime = Date.now();

        this.deltaTime = currentTime - this.startTime;

        // Такой себе метод рассчета времени
        // Придумайте как без методов обьекта Date
        // просто делите на 1000 для секунд итд
        const time = new Date(this.deltaTime);
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const ms = Number.parseInt(time.getMilliseconds() / 100);

        console.log('Таймер обновляется раз в 100мс');
        this.onTick({ min, sec, ms });
      }, 100);
    }
  }

  stop() {
    this.isActive = false;
    clearInterval(this.timerId);
    this.timerId = null;
    this.startTime = null;
    this.deltaTime = 0;

    this.onTick({ min: 0, sec: 0, ms: 0 });
  }
}

const timer = new Timer({
  onTick: updateClockface,
});

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));

updateClockface({ min: 0, sec: 0, ms: 0 });

function updateClockface({ min, sec, ms }) {
  clockface.textContent = `${min}:${sec}.${ms}`;
}
