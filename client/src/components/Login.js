import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../graphql/mutations";
import {
  SplashBackground,
  IntakeForm,
  IntakeInput,
  IntakeButton
} from "./styledComponents";

const initialState = {
  username: "",
  password: ""
};

class Login extends Component {
  state = { ...initialState };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e, loginUser) => {
    e.preventDefault();

    loginUser().then(({ data }) => {
      localStorage.setItem("token", data.loginUser.token);
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <SplashBackground>
        <Mutation mutation={LOGIN_USER} variables={{ username, password }}>
          {(loginUser, { data, loading, error }) => {

            return (
              <IntakeForm onSubmit={e => this.handleSubmit(e, loginUser)}>
                <h1>Log In</h1>
                <IntakeInput
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                <IntakeInput
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <IntakeButton>Submit</IntakeButton>
              </IntakeForm>
            );
          }}
        </Mutation>
      </SplashBackground>
    );
  }
}

export default Login;
