import React from 'react';
import Note from './note';
import './notes-grid.css';

const NotesGrid = ({ notes, onRemoveNote }) => (
  <div className="NotesGrid">
    {notes.map(note => (
      <Note
        key={note.id}
        text={note.text}
        onDelete={() => onRemoveNote(note.id)}
      />
    ))}
  </div>
);

export default NotesGrid;
