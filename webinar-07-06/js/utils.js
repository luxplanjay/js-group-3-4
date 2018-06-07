'use strict';

/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope = document] Optional scope element for the selector
 * @returns {(Element|null)} DOM element or null
 */
function $qs(selector, scope = document) {
  return scope.querySelector(selector);
}

/**
 * querySelectorAll wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope = document] Optional scope element for the selector
 * @returns {Element[]} Array of DOM elements
 */
function $qsa(selector, scope = document) {
  return scope.querySelectorAll(selector);
}

/**
 * createElement wrapper
 *
 * @param {string} type node type
 * @param {object} [attributes={}] node attributes
 * @param {string} [content=''] text content
 * @returns {object} DOM element
 */
function $cel(tag, props = {}, text) {
  const elem = document.createElement(tag);

  Object.entries(props).forEach(([key, value]) => (elem[key] = value));

  if (text && typeof text === 'string') {
    elem.appendChild(document.createTextNode(text));
  }

  return elem;
}

/**
 * addEventListener wrapper
 *
 * @param {Element} target Target element
 * @param {string} type Event type
 * @param {Function} callback Event callback
 * @param {boolean} [capture = false] Event capture flag
 */
function $on(target, type, callback, capture = false) {
  target.addEventListener(type, callback, capture);
}

/**
 * removeEventListener wrapper
 *
 * @param {Element} target Target element
 * @param {string} type Event type
 * @param {Function} callback Event callback
 * @param {boolean} [capture = false] Event capture flag
 */
function $off(target, type, callback, capture = false) {
  target.removeEventListener(type, callback, capture);
}
