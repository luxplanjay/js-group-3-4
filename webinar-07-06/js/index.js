'use strict';

const notesList = [
  { text: 'Заметка номер один', date: getTimeStamp() },
  { text: 'Заметка номер два', date: getTimeStamp() },
  { text: 'Заметка номер три', date: getTimeStamp() },
  { text: 'Заметка номер четыре', date: getTimeStamp() },
];

const grid = $qs('.notes-grid');

// const elements = createGridItems(notesList);
// grid.append(...elements);

const markup = createGridItemsMarkup(notesList);
grid.innerHTML = markup;

/* Helpers */
function createGridItems(arr) {
  return arr.reduce((acc, el) => acc.concat(createNote(el)), []);

  // const elements = [];

  // arr.forEach(note => {
  //   const el = createNote(note);
  //   elements.push(el);
  // });

  // return elements;
}

function createNote({ text, date }) {
  const note = $cel('div', { className: 'note' });
  const noteContent = $cel('div', { className: 'note__content' });
  const noteText = $cel('p', { className: 'note__text' }, text);
  const noteDate = $cel('p', { className: 'note__date' }, `Создано: ${date}`);

  const noteActions = $cel('div', { className: 'note__actions' });
  const editBtn = $cel('button', { className: 'button' }, 'Изменить');
  const delBtn = $cel('button', { className: 'button' }, 'Удалить');

  noteContent.append(noteText, noteDate);
  noteActions.append(editBtn, delBtn);
  note.append(noteContent, noteActions);

  return note;
}

function createGridItemsMarkup(arr) {
  return arr.reduce(
    (acc, obj) => acc + createNoteMarkup(obj),
    ''
  );

  // let markup = '';

  // arr.forEach(note => {
  //   const html = createNoteMarkup(note);
  //   markup += html;
  // });

  // return markup;
}

function createNoteMarkup({ text, date }) {
  return `
  <div class="note">
    <div class="note__content">
      <p class="note__text">${text}</p>
      <p class="note__date">Создано: ${date}</p>
    </div>
    <div class="note__actions">
      <button class="button">Изменить</button>
      <button class="button">Удалить</button>
    </div>
  </div>
  `;
}

function getTimeStamp() {
  return new Date().toLocaleDateString();
}
