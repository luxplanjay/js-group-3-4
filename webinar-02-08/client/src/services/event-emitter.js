/**
 * https://addyosmani.com/blog/understanding-the-publishsubscribe-pattern-for-greater-javascript-scalability/
 *
 * https://davidwalsh.name/pubsub-javascript
 */

export default class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(type, callback) {
    this.events[type] = this.events[type] || [];

    this.events[type].push(callback);
  }

  emit(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach(callback => callback(...args));
    }
  }
}
