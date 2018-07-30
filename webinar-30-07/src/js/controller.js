export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('add', this.addNote.bind(this));
    view.on('remove', this.removeNote.bind(this));
  }

  addNote(text) {
    this.model.addItem(text).then(item => this.view.addNote(item));

    console.log(this.model);
  }

  removeNote(id) {
    this.model.removeItem(id);
    this.view.removeNote(id);
  }
}
