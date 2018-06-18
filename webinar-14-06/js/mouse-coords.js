((doc, win) => {
  const winCoordsEl = doc.querySelector('.js-win-coords');
  const docCoordsEl = doc.querySelector('.js-doc-coords');
  updateCoords(0, 0, 0, 0);

  insertSpacer();

  win.addEventListener('mousemove', handleMouseMove);

  function handleMouseMove({ clientX, clientY, pageX, pageY }) {
    updateCoords(clientX, clientY, pageX, pageY);
  }

  function updateCoords(cx, cy, px, py) {
    winCoordsEl.textContent = `Относительно окна: (clientX: ${cx}, clientY: ${cy})`;
    docCoordsEl.textContent = `Относительно документа: (pageX: ${px}, pageY: ${py})`;
  }

  function insertSpacer() {
    const spacer = doc.createElement('div');
    spacer.style.height = '2000px';
    doc.body.appendChild(spacer);
  }
})(document, window);
