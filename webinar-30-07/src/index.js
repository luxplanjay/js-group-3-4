import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';
import EventEmitter from './services/event-emitter';
import './css/styles.css';

const view = new View();
const model = new Model();

console.log(view);

new Controller(model, view);
