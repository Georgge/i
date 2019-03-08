import React from 'react';

export const Statics = ({ state }) => {
  const { screens, currentScreen } = state;
  return (
    <div>
      <header
        className={currentScreen === (screens.length - 1) ? 'top-bar  invert' : 'top-bar'}
      >
        <h1 className="top-bar-title">JorgeGarcia</h1>
        <div className="top-bar-menu">
          <i className="fas fa-bars" />
        </div>
      </header>
      <div className="scroll">
        <div className="scroll-current">Home</div>
        <div className="scroll-line" />
        <div className="scroll-next">02</div>
        <i>
          {
            currentScreen === (screens.length - 1) ? '↑'
              : currentScreen === 0 ? '↓' : '↕'
          }
        </i>
      </div>
    </div>
  )
};
