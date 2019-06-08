import React, { Component } from "react";
import styled from "styled-components";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmedPassword: ""
};

class SignUp extends Component {
  state = { ...initialState };

  render() {
    const { name, email, password, confirmedPassword } = this.state;
    return (
      <SignUpForm>
        <h1>Sign Up</h1>
        <SignUpInput type="text" name={name} placeholder="Name" />
        <SignUpInput type="email" name={email} placeholder="Email" />
        <SignUpInput type="password" name={password} placeholder="Password" />
        <SignUpInput
          type="password"
          name={confirmedPassword}
          placeholder="Confirm Password"
        />
        <SignUpButton>Submit</SignUpButton>
      </SignUpForm>
    );
  }
}

export default SignUp;

const SignUpForm = styled.form`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const SignUpInput = styled.input`
  font-size: 2em;
  margin: 0.5em;
  outline: 0;
`;

const SignUpButton = styled.button`
  border: none;
  border-radius: 0.2em;
  padding: 0.5em 1em;
  margin: 0.5em 0 0.75em;
  font-size: 24px;
`;
