import { getProductByName } from '../products';

describe('products', () => {
  it('Should find product object by name', () => {
    const product = getProductByName('Fridge');

    expect(product).toEqual({ name: 'Fridge', price: 300 });
  });

  it('Should return undefined if product is not available', () => {
    const product = getProductByName('Mango');

    expect(product).toBeUndefined();
  });
});
