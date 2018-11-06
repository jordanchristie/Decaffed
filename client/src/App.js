import React, { Component } from 'react';
import Home from './components/Home';
import CoffeeMap from './components/CoffeeMap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css'

class App extends Component {
   render() {
    return (
      <main className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/map" component={CoffeeMap} />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App;
