import React from 'react';
import Button from './button';
import './note.css';

const Note = ({ text, onDelete, onEdit }) => (
  <div className="Note">
    <p className="Note-text">{text}</p>
    <div className="Note-actions">
      <Button label="Удалить" onClick={onDelete} />
      <Button label="Редактировать" onClick={onEdit} />
    </div>
  </div>
);

export default Note;
