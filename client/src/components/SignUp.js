import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import { SIGN_UP_USER } from "../graphql/mutations";
import {
  IntakeForm,
  IntakeInput,
  ActionButton,
  SplashBackground
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

    signUpUser().then(async ({ data }) => {
      localStorage.setItem("token", data.signUpUser.token);

      await this.props.refetch();
      this.props.history.push("/dashboard");
    });
  };

  render() {
    const { username, email, password, confirmedPassword } = this.state;
    return (
      <Mutation
        mutation={SIGN_UP_USER}
        variables={{ username, email, password, confirmedPassword }}
      >
        {(signUpUser, { data, loading, error }) => {
          return (
            <SplashBackground>
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
                <ActionButton>Submit</ActionButton>
                <p>
                  Already a user? <Link to="/login">Log In</Link>
                </p>
              </IntakeForm>
            </SplashBackground>
          );
        }}
      </Mutation>
    );
  }
}

export default withRouter(SignUp);
