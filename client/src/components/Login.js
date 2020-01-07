import React, { Component } from "react";
import { withRouter } from "react-router";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../graphql/mutations";
import {
  IntakeForm,
  IntakeInput,
  ActionButton,
  SplashBackground
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
    loginUser()
      .then(async ({ data }) => {
        console.log(data);
        localStorage.setItem("token", data.loginUser.token);
        await this.props.refetch();
        this.props.history.push("/dashboard");
      })
      .catch(error => console.log(error.message));
  };

  render() {
    const { username, password } = this.state;
    return (
      <Mutation mutation={LOGIN_USER} variables={this.state}>
        {(loginUser, { data, loading, error }) => {
          return (
            <SplashBackground>
              <IntakeForm onSubmit={e => this.handleSubmit(e, loginUser)}>
                <h1>Login</h1>
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
                <ActionButton>Login</ActionButton>
              </IntakeForm>
            </SplashBackground>
          );
        }}
      </Mutation>
    );
  }
}

export default withRouter(Login);
