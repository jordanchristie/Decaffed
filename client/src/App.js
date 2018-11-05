import React, { Component } from 'react';
import Home from './components/Home';
import CoffeeMap from './components/CoffeeMap';

import './App.css'

class App extends Component {
  render() {
    return (
      <main className="App">
        <Home />
        <CoffeeMap />
      </main>
    );
  }
}

export default App;
