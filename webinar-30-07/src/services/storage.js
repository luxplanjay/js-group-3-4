export const set = value => {
  localStorage.setItem('image-finder-app', JSON.stringify(value));
};

export const get = () => {
  const data = localStorage.getItem('image-finder-app');

  return data ? JSON.parse(data) : null;
};
