import * as api from '../services/api';

export default class Model {
  constructor(items = []) {
    this.items = items;
    this.selectedItemId = null;
  }

  fetchItems() {
    return api.getAllNotes().then(notes => {
      this.items = notes;

      return this.items;
    });
  }

  setSelectedItemId(id) {
    this.selectedItemId = id;
  }

  getSelectedItemId() {
    return this.selectedItemId;
  }

  findItem(id) {
    return this.items.find(item => item.id === id);
  }

  addItem(text) {
    return api.addNote({ text }).then(item => {
      this.items.push(item);
      return item;
    });
  }

  updateItem(note) {
    return api.updateNote(note).then(updatedNote => {
      let item = this.findItem(updatedNote.id);
      item = updatedNote;

      return item;
    });
  }

  removeItem(id) {
    return api.deleteNote(id).then(noteId => {
      this.items = this.items.filter(item => item.id !== noteId);
      return noteId;
    });
  }
}
