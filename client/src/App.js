import React from "react";
import { createGlobalStyle } from "styled-components";
// import { reset } from 'styled-reset';
import SplashPage, { SplashBackground } from "./components/SplashPage";
import CoffeeMap from "./components/CoffeeMap";
import Header from "./components/Header";
import Home from "./components/Home";
import MyNotes from "./components/MyNotes";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import withAuth from "./withAuth";

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

const App = ({ refetch, session }) => {
  return (
    <main className="App">
      <Router>
        <>
          <GlobalStyle />
          <Header session={session} />
          <Switch>
            <SplashBackground>
              <Route
                exact
                path="/"
                render={() => <SplashPage session={session} />}
              />
              <Route path="/signup" component={SignUp} />
            </SplashBackground>
            <Route path="/map" component={CoffeeMap} />
            <Route
              path="/dashboard"
              render={() => <Home session={session} />}
            />
            <Route path="/myNotes" component={MyNotes} />
          </Switch>
        </>
      </Router>
    </main>
  );
};

export default withAuth(App);
