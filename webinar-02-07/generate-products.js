function generateProducts(num) {
  return [...Array(num)].map(() => ({
    name: faker.random.arrayElement([
      'Baked Peas & Mushroom Yak',
      'Seared Pepper & Garlic Mutton',
      "Smoked Sweet 'n Sour Rice",
      'Roasted Orange & Olive Oysters',
      'Caramel Toffee',
      'Pistachio and Elderberry Wafer',
      'Strawberry Pancakes',
      'Chocolate Pie',
    ]),
    image: faker.image.food(),
    descr: faker.lorem.sentences(2),
    price: faker.commerce.price(0, 100),
    available: faker.random.boolean(),
  }));
}
