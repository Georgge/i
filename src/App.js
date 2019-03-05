import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="top-bar">
          <h1 className="top-bar-title">JorgeGarcia</h1>
          <div className="top-bar-menu">
            <i className="fas fa-bars" />
          </div>
        </header>
        <div className="scroll">
          <div className="scroll-current">Home</div>
          <div className="scroll-line"></div>
          <div className="scroll-next">02</div>
          <i>↓</i>
        </div>
        <div className="screen  hero">
          <div className="hero-text">
            <p>
              I'm a web developer always hungry to learn
              new things. Also I'm a nature lover.
            </p>

            <p>
              Engineer by profession but autodidact on internet for nature.
              But, without a doubt, software development is not just about
              writing code, you always have to go further, learning and
              sharing, sharing and leraning are the foundations of a good
              developer.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
