import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../graphql/mutations";
import { IntakeForm, IntakeInput, IntakeButton } from "./styledComponents";

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
      this.props.refetch();
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <Mutation mutation={LOGIN_USER} variables={{ username, password }}>
        {(loginUser, { data, loading, error }) => {
          return (
            <IntakeForm
              active={this.props.active}
              onSubmit={e => this.handleSubmit(e, loginUser)}
            >
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
              <IntakeButton>Login</IntakeButton>
            </IntakeForm>
          );
        }}
      </Mutation>
    );
  }
}

export default Login;
