import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
// import { reset } from 'styled-reset';
import SplashPage from "./pages/SplashPage";
import CoffeeMap from "./pages/CoffeeMap";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import withAuth from "./withAuth";
import SearchPage from "./pages/SearchPage";

const GlobalStyle = createGlobalStyle`
  html, body, .App {
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
`;

const App = ({ refetch, user }) => {
  return (
    <main className="App">
      <Router>
        <>
          <GlobalStyle />
          <Header user={user} />
          <Switch>
            <Route exact path="/" render={() => <SplashPage user={user} />} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signup" component={SignUp} />
            <Route path="/search" component={SearchPage} />
            <Route path="/login" component={Login} />
            <Route path="/map" component={CoffeeMap} />
            <Route path="/dashboard" render={() => <Home user={user} />} />
            <Redirect to="/" />
          </Switch>
        </>
      </Router>
    </main>
  );
};

export default withAuth(App);
