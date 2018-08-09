export const set = value => {
  localStorage.setItem('notes-app', JSON.stringify(value));
};

export const get = () => {
  const data = localStorage.getItem('notes-app');

  return data ? JSON.parse(data) : null;
};
