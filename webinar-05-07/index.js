'use strict';

/**
 * /[a-zA-Z0-9_-]+\.mp3/g
 *
 * file_01.mp3 file_02.mv file_03.mp3 file_04.waw file-05.mp3 File-06.mp3
 */

/**
 * /^\+[1-9]\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/
 *
 * /^\+[1-9]\(\d{3}\)\d{3}-\d{2}-\d{2}$/
 *
 * +5(022)345-90-24
 */

const VALIDATOR = {
  patterns: {
    name: /^[a-zA-Z]{4,}$/,
    email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    password: /^[a-z0-9]{6,18}$/,
  },
  validate(formElement) {
    const inputs = Array.from(formElement.querySelectorAll('input'));

    const results = inputs.reduce((acc, { name, value }) => {
      const valid = this.isValid(name, value);

      acc[name] = valid;

      console.group('group');
      console.log('name: ', name);
      console.log('value: ', value);
      console.log('valid: ', valid);
      console.groupEnd('group');

      return acc;
    }, {});

    const valid = Object.values(results).every(value => value);

    return {
      valid,
      results,
    };
  },
  isValid(key, value) {
    return this.patterns[key].test(value);
  },
};

const form = document.querySelector('.js-signup');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  const validationResults = VALIDATOR.validate(form);

  if (!validationResults.valid) {
    alert('Oh no form is not valid!!!!');
    console.log(validationResults.results);
    return;
  }

  alert('Beep boop, thanks and have fun!');
  form.reset();
}
