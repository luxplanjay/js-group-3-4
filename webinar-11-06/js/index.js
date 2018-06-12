'use strict';

// const btn = document.querySelector('.js-btn');

// const btnAddListener = document.querySelector('.js-add-listener');
// const btnRemoveListener = document.querySelector('.js-remove-listener');

// btnAddListener.addEventListener('click', onAddListener);
// btnRemoveListener.addEventListener('click', onRemoveListener);

// function onAddListener() {
//   btn.addEventListener('click', onBtnClick);
// }

// function onRemoveListener() {
//   btn.removeEventListener('click', onBtnClick);
// }

// function onBtnClick() {
//   alert('click!!!!');
// }

// ===============================

const btn = document.querySelector('.js-btn');
const body = document.body;

// console.log(body);

// body.addEventListener('click', function(e) {
//   console.log('[Body]');
//   console.log('event.type: ', e.type);
//   console.log('event.target: ', e.target);
//   console.log('event.currentTarget: ', e.currentTarget);
//   console.log(this === e.currentTarget);
// });

// btn.addEventListener('click', e => {
//   e.stopImmediatePropagation();

//   console.log('[Button]');
//   console.log('event.type: ', e.type);
//   console.log('event.target: ', e.target);
//   console.log('event.currentTarget: ', e.currentTarget);
// });

// =====================================
// const gallery = document.querySelector('.js-gallery');

// gallery.addEventListener('click', onGalleryClick);

// function onGalleryClick({ target }) {
//   const nodeName = target.nodeName;

//   if (nodeName !== 'IMG') return;

//   console.log(target.src);
// }

// function showImageSrc(event) {
//   console.log(event.target.src);
// }

// =========================================

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('.js-form');
//   const input = form.querySelector('input');
//   const list = document.querySelector('.js-list');

//   form.addEventListener('submit', handleFormSubmit);
//   list.addEventListener('click', handleListClick);

//   function handleFormSubmit(event) {
//     event.preventDefault();

//     const listItem = createListItem(input.value);

//     list.appendChild(listItem);

//     form.reset();
//   }

//   function handleListClick(event) {
//     const target = event.target;
//     const nodeName = target.nodeName;
//     const parent = target.parentNode;
//     const hasClass = target.classList.contains('js-btn-del');

//     if (nodeName !== 'BUTTON' || !hasClass) return;

//     parent.remove();
//   }
// });

// function createListItem(text) {
//   const li = document.createElement('li');
//   li.textContent = text;

//   const buttonDel = document.createElement('button');
//   buttonDel.classList.add('js-btn-del');
//   buttonDel.textContent = 'Удалить';

//   const buttonX = document.createElement('button');
//   buttonX.textContent = 'X';

//   li.append(buttonDel, buttonX);

//   return li;
// }

// =========================================

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const modalBackdrop = modal.querySelector('.js-modal-backdrop');
  const btnShowModal = document.querySelector('.js-open-modal');
  const btnCloseModal = document.querySelector('.js-close-modal');

  btnShowModal.addEventListener('click', showModal);
  btnCloseModal.addEventListener('click', hideModal);
  modalBackdrop.addEventListener('click', handlebackdropClick);

  function handlebackdropClick(event) {
    if (this !== event.target) return;

    hideModal();
  }

  function showModal() {
    modal.classList.remove('modal--hidden');
  }

  function hideModal() {
    modal.classList.add('modal--hidden');
  }
});
