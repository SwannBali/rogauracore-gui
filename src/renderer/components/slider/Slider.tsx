import React from 'react';
import './slider.css';

export default function Slider() {
  return (
    <div className="slider-container">
      <span>Brightness</span>
      <input type="range" min="1" max="3" step="1" />
    </div>
  );
}
