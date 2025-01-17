/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './filtertab.css';

export default function FilterTab() {
  return (
    <div className="filter-tab">
      <div className="radio-inputs">
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">Multi color</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">Single color</span>
        </label>

        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">🌈 Rainbow</span>
        </label>
      </div>
      <button type="button" id="save">
        Sauvegarder
      </button>
    </div>
  );
}
