import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ApolloProvider } from "react-apollo";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import client from "./ApolloClient";
import rootReducer from "./reducers/index";

const root = document.getElementById("root");

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept("./App", () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      root
    );
  });
}
