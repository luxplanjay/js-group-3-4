import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';
import EventEmitter from './services/event-emitter';
import './css/styles.css';
import './css/modal.css';
import './css/note-editor.css';

const view = new View();
const model = new Model();

new Controller(model, view);
