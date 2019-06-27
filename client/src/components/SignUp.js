import React, { Component } from "react";
// import { Mutation } from 'react-apollo';
import {
  SplashBackground,
  SignUpForm,
  SignUpInput,
  SignUpButton
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

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { username, email, password, confirmedPassword } = this.state;
    return (
      <SplashBackground>
        <SignUpForm>
          <h1>Sign Up</h1>
          <SignUpInput
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={this.handleChange}
          />
          <SignUpInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <SignUpInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange}
          />
          <SignUpInput
            type="password"
            name="confirmedPassword"
            value={confirmedPassword}
            placeholder="Confirm Password"
            onChange={this.handleChange}
          />
          <SignUpButton bg="#1da1f2" onClick={this.handleSubmit}>
            Submit
          </SignUpButton>
        </SignUpForm>
      </SplashBackground>
    );
  }
}

export default SignUp;
