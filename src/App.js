import React, { Component } from 'react';


import './App.css';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

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
          <div className="scroll-line" />
          <div className="scroll-next">02</div>
          <i>↓</i>
        </div>

        <Home />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
