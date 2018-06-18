((w, d) => {
  const chattyValue = d.querySelector('.chatty-container');
  let counter = 0;

  w.addEventListener('mousemove', throttle(handleMouseMove, 100));

  function handleMouseMove(event) {
    counter += 1;
    chattyValue.textContent = counter;
  }

  function throttle(fn, delay) {
    let lastCall = 0;

    return function(...args) {
      const now = new Date().getTime();

      if (now - lastCall < delay) {
        return;
      }

      lastCall = now;

      return fn(...args);
    };
  }

  function throttleWithRAF(fn) {
    let isFiring = false;

    return function(...args) {
      if (!isFiring) {
        requestAnimationFrame(() => {
          fn(...args);
          isFiring = false;
        });
      }

      isFiring = true;
    };
  }
})(window, document);
