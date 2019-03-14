import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import SplashPage from './components/SplashPage';
import CoffeeMap from './components/CoffeeMap';
import Header from './components/Header';
import Favorites from './components/Favorites';
import MyNotes from './components/MyNotes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: "Roboto", sans-serif;
  }
  li {
    list-style-type: none;
  }
  button {
    color: #fff;
    background: #3f51b5;
    padding: .25em .5em;
    border: none;
  }
`


class App extends Component {
   render() {
    return (
      <main className="App">
        <Router>
          <>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route path="/signup" component={SignUp} />
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
