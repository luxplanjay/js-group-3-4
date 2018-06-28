const grid = document.querySelector('.grid');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const spinner = document.querySelector('.spinner-overlay');

const API_KEY = '563492ad6f91700001000001845b939d393843c869341924558835be';

const toggleSpinner = () => spinner.classList.toggle('visible');

const fetchImages = (query, count) => {
  const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${count}`;
  const headers = { Authorization: API_KEY };

  return fetch(url, { headers })
    .then(response => {
      if (response.ok) return response.json();

      throw new Error('error: ' + response.statusText);
    })
    .then(data => data.photos)
    .catch(err => console.log(err));
};

const createGridItems = items => {
  return items.reduce(
    (markup, item) =>
      markup +
      `<div class="grid-item"><img src=${item.src.large} alt=${
        item.photographer
      }></div>`,
    '',
  );
};

const updateGrid = photos => {
  const markup = createGridItems(photos);

  grid.innerHTML = markup;
};

const handleFormSumit = e => {
  e.preventDefault();

  toggleSpinner();

  const query = input.value;

  fetchImages(query, 9).then(photos => {
    updateGrid(photos);
    toggleSpinner();
  });

  e.target.reset();
};

form.addEventListener('submit', handleFormSumit);
