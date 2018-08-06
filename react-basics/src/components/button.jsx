import React from 'react';
import './button.css';

const Button = ({ type = 'button', label, onClick = () => null }) => (
  <button className="Button" type={type} onClick={onClick}>
    {label}
  </button>
);

export default Button;
