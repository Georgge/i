import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import { TweenLite } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


import './App.css';
import { Statics } from './components/Statics';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

class App extends Component {
  state = {
    screens: [
      '.home',
      '.skills',
      '.contact',
    ],
    currentScreen: 0,
  }

  _handleSwipe = (e) => {
    const { angle, isFinal } = e;
    const direction = angle < 0 ? 'up' : 'down'
    const { screens, currentScreen } = this.state;
    let current = currentScreen

    console.log(direction, isFinal);

    if (direction === 'up' && isFinal && current < screens.length - 1){
      current += 1;
      this.setState({ currentScreen: current }, () => {
        console.log(screens[currentScreen]);
        TweenLite.to(window, 0.5, {scrollTo: screens[current]});
      })
    }
    else if (direction === 'down' && isFinal && current > 0) {
      current -= 1;
      this.setState({ currentScreen: current }, () => {
        console.log(screens[currentScreen]);
        TweenLite.to(window, 0.5, {scrollTo: screens[current]});
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Hammer onSwipe={this._handleSwipe} direction="DIRECTION_VERTICAL">
          <div className="touchable-area">
            <Statics state={this.state} />
            <Home />
            <Skills />
            <Contact />
          </div>
        </Hammer>
      </div>
    );
  }
}

export default App;
