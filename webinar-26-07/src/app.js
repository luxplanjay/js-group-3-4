import { fetchImages } from './services/api';
import * as storage from './services/storage';
import gridItemTpl from './templates/grid-item.hbs';
import './styles.css';
import './sass/test.scss';

const grid = document.querySelector('.grid');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const spinner = document.querySelector('.spinner-overlay');
const loadMoreBtn = document.querySelector('.load-more');
let currentPage = 1;
let currentQuery = '';
const persistedPhotos = storage.get();
const fetchedPhotos = [];

if (persistedPhotos) {
  hydratePhotosGrid(persistedPhotos);
}

form.addEventListener('submit', handleFormSumit);
loadMoreBtn.addEventListener('click', hanelLoadMoreClick);

// ============= Helpers

function hydratePhotosGrid(photos) {
  const markup = createGridItems(photos);
  updatePhotosGrid(markup);
}

function createGridItems(items) {
  return items.reduce((markup, item) => markup + gridItemTpl(item), '');
}

function updatePhotosGrid(markup) {
  grid.insertAdjacentHTML('beforeend', markup);
}

function hanelLoadMoreClick() {
  incrementCurrentPage();

  handleFetch({
    query: currentQuery,
    count: 9,
    page: currentPage,
  });
}

function toggleSpinner() {
  return spinner.classList.toggle('visible');
}

function showLoadMoreBtn() {
  if (!loadMoreBtn.classList.contains('visible')) {
    loadMoreBtn.classList.add('visible');
  }
}

function resetCurrentPage() {
  currentPage = 1;
}

function incrementCurrentPage() {
  currentPage += 1;
}

function scrollToBottom() {
  scrollTo(0, document.body.scrollHeight);
}

function resetPhotosGrid() {
  grid.innerHTML = '';
}

function handleFetch(params) {
  toggleSpinner();

  fetchImages(params).then(photos => {
    fetchedPhotos.push(...photos);
    storage.set(fetchedPhotos);

    const markup = createGridItems(photos);
    updatePhotosGrid(markup);
    toggleSpinner();
    scrollToBottom();
  });
}

function handleFormSumit(e) {
  e.preventDefault();

  resetCurrentPage();
  resetPhotosGrid();

  currentQuery = input.value;

  handleFetch({
    query: currentQuery,
    count: 9,
    page: currentPage,
  });

  e.target.reset();
  showLoadMoreBtn();
}
