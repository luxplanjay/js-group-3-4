import React, { Component } from 'react';
import * as api from '../services/api';
import NoteEditor from './note-editor';
import NotesGrid from './notes-grid';
import Modal from './modal';
import Backdrop from './backdrop';
import Loader from './loader';

const getNoteById = (notes, id) => notes.find(note => note.id === id);

export default class App extends Component {
  state = {
    notes: [],
    isModalOpen: false,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    api.getAllNotes().then(notes => {
      this.setState({ notes, loading: false });
    });
  }

  addNote = text => {
    this.setState({ loading: true });

    api.addNote({ text }).then(note => {
      this.setState(prevState => ({
        notes: [...prevState.notes, note],
        loading: false,
      }));
    });
  };

  removeNote = idToRemove => {
    this.setState({ loading: true });

    api.deleteNote(idToRemove).then(id => {
      this.setState(prevState => ({
        notes: prevState.notes.filter(note => note.id !== id),
        loading: false,
      }));
    });
  };

  updateNote = noteToUpdate => {
    this.setState({ loading: true });

    api.updateNote(noteToUpdate).then(updatedNote => {
      this.toggleModal();

      this.setState(prevState => ({
        notes: prevState.notes.map(
          note => (note.id === updatedNote.id ? updatedNote : note),
        ),
        loading: false,
      }));
    });
  };

  toggleModal = id => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      selectedNoteId: id,
    }));
  };

  render() {
    const { notes, isModalOpen, selectedNoteId, loading } = this.state;

    const selectedNote = selectedNoteId
      ? getNoteById(notes, selectedNoteId)
      : null;

    return (
      <div>
        {isModalOpen && (
          <Backdrop>
            <Modal
              onClose={this.toggleModal}
              onSave={this.updateNote}
              note={selectedNote}
            />
          </Backdrop>
        )}

        {loading && (
          <Backdrop>
            <Loader />
          </Backdrop>
        )}

        <NoteEditor onAddNote={this.addNote} />
        <NotesGrid
          notes={notes}
          onRemoveNote={this.removeNote}
          onEditNote={this.toggleModal}
        />
      </div>
    );
  }
}
