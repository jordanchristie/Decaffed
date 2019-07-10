import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
// import { reset } from 'styled-reset';
import SplashPage from "./pages/SplashPage";
import CoffeeMap from "./pages/CoffeeMap";
import Header from "./components/Header";
import Home from "./pages/Home";
import MyNotes from "./components/MyNotes";
import SignUpLoginPage from "./pages/SignUpLoginPage";
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

const App = ({ refetch, user }) => {
  return (
    <main className="App">
      <Router>
        <>
          <GlobalStyle />
          <Header user={user} />
          <Switch>
            <Route exact path="/" render={() => <SplashPage user={user} />} />
            <Route
              path="/signup"
              render={
                () => <SignUpLoginPage refetch={refetch} />
                // user.hasOwnProperty("token") ? (
                //   <SignUpLoginPage refetch={refetch} />
                // ) : (
                //   <Redirect to="/dashboard" />
                // )
              }
            />

            <Route path="/map" component={CoffeeMap} />
            <Route path="/dashboard" render={() => <Home user={user} />} />
            <Route path="/myNotes" component={MyNotes} />
            <Redirect to="/" />
          </Switch>
        </>
      </Router>
    </main>
  );
};

export default withAuth(App);
