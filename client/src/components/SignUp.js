import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { SIGN_UP_USER } from "../graphql/mutations";
import {
  SplashBackground,
  IntakeForm,
  IntakeInput,
  IntakeButton
} from "./styledComponents";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmedPassword: ""
};

class SignUp extends Component {
  state = { ...initialState };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e, signUpUser) => {
    e.preventDefault();

    signUpUser().then(({ data }) => {
      localStorage.setItem("token", data.signUpUser.token);
    });
  };

  render() {
    const { username, email, password, confirmedPassword } = this.state;
    return (
      <SplashBackground>
        <Mutation
          mutation={SIGN_UP_USER}
          variables={{ username, email, password, confirmedPassword }}
        >
          {(signUpUser, { data, loading, error }) => {
            return (
              <IntakeForm onSubmit={e => this.handleSubmit(e, signUpUser)}>
                <h1>Sign Up</h1>
                <IntakeInput
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                <IntakeInput
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <IntakeInput
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <IntakeInput
                  type="password"
                  name="confirmedPassword"
                  value={confirmedPassword}
                  placeholder="Confirm Password"
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

export default SignUp;
