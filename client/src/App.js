import React, { Component } from 'react';
import SplashPage from './components/SplashPage'
import CoffeeMap from './components/CoffeeMap';
import Header from './components/Header';
import Favorites from './components/Favorites';
import MyNotes from './components/MyNotes';
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
            <Route exact path="/" component={SplashPage} />
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

