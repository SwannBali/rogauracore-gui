/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React from 'react';
import './style.css';

interface IKeyboard {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
}

export default function Keyboard({
  color1,
  color2,
  color3,
  color4,
}: IKeyboard) {
  return (
    <div className="keyboard">
      <div className="row">
        <button className="key gradient" id="key-1" style={{ '--color1': color1, '--color2': color1 } as React.CSSProperties} />
        <button className="key gradient" id="key-2" style={{ '--color1': color1, '--color2': color1 } as React.CSSProperties} />
        <button className="key gradient" id="key-3" style={{ '--color1': color1, '--color2': color2 } as React.CSSProperties} />
        <button className="key gradient" id="key-4" style={{ '--color1': color2, '--color2': color2 } as React.CSSProperties} />
        <button className="key gradient" id="key-5" style={{ '--color1': color2, '--color2': color2 } as React.CSSProperties} />
        <button className="key gradient" id="key-6" style={{ '--color1': color2, '--color2': color2 } as React.CSSProperties} />
        <button className="key gradient" id="key-7" style={{ '--color1': color2, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-8" style={{ '--color1': color3, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-9" style={{ '--color1': color3, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-10" style={{ '--color1': color3, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-11" style={{ '--color1': color3, '--color2': color4 } as React.CSSProperties} />
        <button className="key gradient" id="key-12" style={{ '--color1': color4, '--color2': color4 } as React.CSSProperties} />
        <button className="key gradient" id="key-13" style={{ '--color1': color4, '--color2': color4 } as React.CSSProperties} />
        <button className="key gradient" id="key-14" style={{ '--color1': color4, '--color2': color4 } as React.CSSProperties} />
      </div>
      <div className="row">
        <button className="key utility gradient" id="key-15" style={{ '--color1': color1, '--color2': color1 } as React.CSSProperties} />
        <button className="key gradient" id="key-16" style={{ '--color1': color1, '--color2': color1 } as React.CSSProperties} />
        <button className="key gradient" id="key-17" style={{ '--color1': color1, '--color2': color2 } as React.CSSProperties} />
        <button className="key gradient" id="key-18" style={{ '--color1': color2, '--color2': color2 } as React.CSSProperties} />
        <button className="key gradient" id="key-19" style={{ '--color1': color2, '--color2': color2 } as React.CSSProperties} />
        <button className="key gradient" id="key-20" style={{ '--color1': color2, '--color2': color2 } as React.CSSProperties} />
        <button className="key gradient" id="key-21" style={{ '--color1': color2, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-22" style={{ '--color1': color3, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-23" style={{ '--color1': color3, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-24" style={{ '--color1': color3, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-25" style={{ '--color1': color3, '--color2': color4 } as React.CSSProperties} />
        <button className="key gradient" id="key-26" style={{ '--color1': color4, '--color2': color4 } as React.CSSProperties} />
        <button className="key gradient" id="key-27" style={{ '--color1': color4, '--color2': color4 } as React.CSSProperties} />
        <button className="key gradient" id="key-28" style={{ '--color1': color4, '--color2': color4 } as React.CSSProperties} />
      </div>
      <div className="row">
        <button className="key utility gradient" id="key-28" style={{ '--color1': color1, '--color2': color1 } as React.CSSProperties} />
        <button className="key gradient" id="key-31" style={{ '--color1': color1, '--color2': color2 } as React.CSSProperties} />
        <button className="key gradient" id="key-32" style={{ '--color1': color2, '--color2': color2 } as React.CSSProperties} />
        <button className="key gradient" id="key-33" style={{ '--color1': color2, '--color2': color2 } as React.CSSProperties} />
        <button className="key gradient" id="key-34" style={{ '--color1': color2, '--color2': color2 } as React.CSSProperties} />
        <button className="key gradient" id="key-35" style={{ '--color1': color2, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-36"style={{ '--color1': color3, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-37" style={{ '--color1': color3, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-38" style={{ '--color1': color3, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-39" style={{ '--color1': color3, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-40" style={{ '--color1': color3, '--color2': color4 } as React.CSSProperties} />
        <button className="key gradient" id="key-41" style={{ '--color1': color4, '--color2': color4 } as React.CSSProperties} />
        <button className="key utility gradient" id="key-42" style={{ '--color1': color4, '--color2': color4 } as React.CSSProperties} />
      </div>
      <div className="row">
        <button className="key gradient" id="key-43" style={{ '--color1': color1, '--color2': color1 } as React.CSSProperties} />
        <button className="key gradient" id="key-44" style={{ '--color1': color1, '--color2': color1 } as React.CSSProperties} />
        <button className="key gradient" id="key-45" style={{ '--color1': color1, '--color2': color2 } as React.CSSProperties} />
        <button className="key gradient" id="key-46" style={{ '--color1': color2, '--color2': color2 } as React.CSSProperties} />
        <button className="key key-space gradient" id="key-47" style={{ '--color1': color2, '--color2': color3 } as React.CSSProperties} />
        <button className="key gradient" id="key-48" style={{ '--color1': color3, '--color2': color4 } as React.CSSProperties} />
        <button className="key gradient" id="key-49" style={{ '--color1': color4, '--color2': color4 } as React.CSSProperties} />
        <button className="key gradient" id="key-50" style={{ '--color1': color4, '--color2': color4 } as React.CSSProperties} />
        <button className="key gradient" id="key-51" style={{ '--color1': color4, '--color2': color4 } as React.CSSProperties} />
      </div>
    </div>
  );
}
