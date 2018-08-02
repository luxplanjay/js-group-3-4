export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.fetchItems().then(this.view.init);

    this.view.on('add', this.addNote.bind(this));
    this.view.on('remove', this.removeNote.bind(this));
    this.view.on('edit-start', this.handleEditStart.bind(this));
    this.view.on('edit-cancel', this.handleEditCancel.bind(this));
    this.view.on('edit-success', this.handleEditSuccess.bind(this));
  }

  handleEditSuccess(text) {
    const id = this.model.getSelectedItemId();

    this.model.updateItem({ id, text }).then(item => {
      this.view.closeModal();
      this.view.updateNote(item);
    });
  }

  handleEditStart(id) {
    const note = this.model.findItem(id);
    this.model.setSelectedItemId(id);

    this.view.openModal(note);
  }

  handleEditCancel() {
    this.view.closeModal();
  }

  addNote(text) {
    this.model.addItem(text).then(this.view.addNote);
  }

  removeNote(id) {
    this.model.removeItem(id).then(this.view.removeNote);
  }
}
