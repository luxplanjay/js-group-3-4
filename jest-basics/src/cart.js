import { getProductByName } from './products';

export default class Cart {
  constructor(items = {}) {
    this._items = items;
  }

  addItem(name) {
    if (!this._items[name]) {
      this._items[name] = 1;
      return;
    }

    this._items[name] += 1;
  }

  removeItem(name) {
    if (!this._items[name]) return null;

    delete this._items[name];
  }

  get items() {
    return this._items;
  }

  get totalPrice() {
    return Object.entries(this._items).reduce((total, [name, amount]) => {
      const product = getProductByName(name);
      const price = product.price;

      return total + amount * price;
    }, 0);
  }
}
