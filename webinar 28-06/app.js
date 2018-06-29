const grid = document.querySelector('.grid');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const spinner = document.querySelector('.spinner-overlay');
const loadMoreBtn = document.querySelector('.load-more');
let currentPage = 1;
let currentQuery = '';

const API_KEY = '5837779-ac3ba737206b541ae294f1119';

const toggleSpinner = () => spinner.classList.toggle('visible');

const showLoadMoreBtn = () => {
  if (!loadMoreBtn.classList.contains('visible')) {
    loadMoreBtn.classList.add('visible');
  }
};

const resetCurrentPage = () => {
  currentPage = 1;
};

const incrementCurrentPage = () => {
  currentPage += 1;
};

const scrollToBottom = () => scrollTo(0, document.body.scrollHeight);

const fetchImages = ({ query, count, page }) => {
  const url = `https://pixabay.com/api/?image_type=photo&q=${query}&per_page=${count}&page=${page}&key=${API_KEY}`;

  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error('error: ' + response.statusText);
    })
    .then(data => data.hits)
    .catch(err => console.log(err));
};

const createGridItems = items => {
  return items.reduce(
    (markup, item) =>
      markup +
      `<div class="grid-item">
        <img src=${item.webformatURL} alt="photo">
      </div>`,
    '',
  );
};

const updatePhotosGrid = markup => {
  grid.insertAdjacentHTML('beforeend', markup);
};

const resetPhotosGrid = () => {
  grid.innerHTML = '';
};

const handleFetch = params => {
  toggleSpinner();

  fetchImages(params).then(photos => {
    const markup = createGridItems(photos);
    updatePhotosGrid(markup);
    toggleSpinner();
    scrollToBottom();
  });
};

const handleFormSumit = e => {
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
};

const hanelLoadMoreClick = () => {
  incrementCurrentPage();

  handleFetch({
    query: currentQuery,
    count: 9,
    page: currentPage,
  });
};

form.addEventListener('submit', handleFormSumit);
loadMoreBtn.addEventListener('click', hanelLoadMoreClick);
