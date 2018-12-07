import React, { Component } from 'react';
import Home from './components/Home/Home';
import CoffeeMap from './components/CoffeeMap/CoffeeMap';
import Header from './components/Header/Header';
import Favorites from './components/Favorites/Favorites';
import MyNotes from './components/MyNotes/MyNotes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css'


class App extends Component {
   render() {
    return (
      <main className="App">
        <Router>
          <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/map" component={CoffeeMap} />
            <Route path="/dashboard" component={Favorites} />
            <Route path="/myNotes" component={MyNotes}/>
          </Switch>
          </>
        </Router>
      </main>
    );
  }
}

export default App;
