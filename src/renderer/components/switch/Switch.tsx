/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './switch.css';

export default function Switch() {
  return (
    <div className="switch-container">
      <span>OFF</span>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider" />
      </label>
      <span>ON</span>
    </div>
  );
}
