import React from 'react';
import Note from './note';
import './notes-grid.css';

const NotesGrid = ({ notes, onRemoveNote, onEditNote }) => (
  <div className="NotesGrid">
    {notes.map(note => (
      <Note
        key={note.id}
        text={note.text}
        onDelete={() => onRemoveNote(note.id)}
        onEdit={() => onEditNote(note.id)}
      />
    ))}
  </div>
);

export default NotesGrid;
