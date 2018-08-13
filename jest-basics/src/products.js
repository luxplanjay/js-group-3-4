const products = [
  { name: 'TV', price: 200 },
  { name: 'Fridge', price: 300 },
  { name: 'Toaster', price: 50 },
];

export const getProductByName = name =>
  products.find(product => product.name === name);
