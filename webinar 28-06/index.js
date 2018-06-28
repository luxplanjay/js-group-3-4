'use strict';

// localStorage.setItem('my-app-1', 'persisted stuff');

// const userSettings = {
//   theme: 'light',
//   fontSize: 24,
// };

// localStorage.setItem('my-app-2', JSON.stringify(userSettings));

// const fromLS = JSON.parse(localStorage.getItem('my-app-2'));
// console.log(fromLS);

// localStorage.removeItem('my-app');

// apixu
// key - 13e3751010cb4d9d946205535171506
// https://www.apixu.com/doc/
// fetch(
//   'http://api.apixu.com/v1/forecast.json?key=13e3751010cb4d9d946205535171506&q=Харьков&days=7',
// )
//   .then(res => res.json())
//   .then(data => console.log(data));

// https://pixabay.com/api/docs/

// const fetchWeather = query =>
//   fetch(
//     `http://api.apixu.com/v1/forecast.json?key=13e3751010cb4d9d946205535171506&q=${query}&days=7`,
//   )
//     .then(res => res.json())
//     .then(data => console.log(data));

// const getUserIP = () =>
//   fetch('https://api.ipify.org?format=json')
//     .then(response => {
//       if (response.ok) return response.json();

//       throw Error('Error while fetching' + response.statusText);
//     })
//     .then(data => data.ip)
//     .catch(err => console.log(err));


//     getUserIP()
//   .then(fetchWeather)
//   .then(data => console.log(data));
