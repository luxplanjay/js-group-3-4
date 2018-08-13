import Cart from '../cart';

describe('Cart class', () => {
  it('Should create Cart instance', () => {
    const cart = new Cart();

    expect(cart instanceof Cart).toBe(true);
  });

  it('Should contain starting items', () => {
    const cart = new Cart({ Fridge: 1, TV: 2 });

    expect(cart.items).toEqual({ Fridge: 1, TV: 2 });
  });

  it('Should add item to cart', () => {
    const cart = new Cart();

    cart.addItem('Fridge');
    cart.addItem('Toaster');
    cart.addItem('Toaster');

    expect(cart.items).toEqual({ Fridge: 1, Toaster: 2 });
  });

  it('Should remove item from cart', () => {
    const cart = new Cart({ Fridge: 1, Toaster: 1 });

    cart.removeItem('Toaster');

    expect(cart.items).toEqual({ Fridge: 1 });
  });

  it('Should return null if item does not exist in cart', () => {
    const cart = new Cart({ Fridge: 1, Toaster: 1 });

    expect(cart.removeItem('Apples')).toBeNull();
  });

  it('Should return total price', () => {
    const cart = new Cart({ Fridge: 2, Toaster: 1 });

    expect(cart.totalPrice).toBe(650);
  });
});
