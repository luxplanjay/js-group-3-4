((win, doc) => {
  const offsetEl = doc.querySelector('.js-page-y-offset');
  const paragraphs = Array.from(doc.querySelectorAll('.js-text'));
  const offsets = collectVerticalOffsets(paragraphs);

  updateOffsetValue(0);

  win.addEventListener('scroll', handleScroll);

  function handleScroll(event) {
    updateOffsetValue(pageYOffset);
    setActiveParagraph(pageYOffset);
  }

  function setActiveParagraph(currentWindowScroll) {
    Object.keys(offsets).forEach(key => {
      if (offsets[key] <= currentWindowScroll) {
        setActiveItem(paragraphs, key);
      }
    });
  }

  function setActiveItem(items, idx) {
    const prevActiveItem = doc.querySelector('.js-text.current');

    if (prevActiveItem) {
      prevActiveItem.classList.remove('current');
    }

    const currActiveItem = items[idx];
    currActiveItem.classList.add('current');
  }

  function collectVerticalOffsets(elements) {
    return elements.reduce((offsets, el, idx) => {
      offsets[idx] = el.offsetTop;
      return offsets;
    }, {});
  }

  function updateOffsetValue(val) {
    offsetEl.textContent = `pageYOffset: ${val}`;
  }
})(window, document);
