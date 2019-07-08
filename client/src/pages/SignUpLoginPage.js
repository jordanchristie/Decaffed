import React, { Component } from "react";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import {
  SplashBackground,
  IntakeWrapper,
  SignUpLoginTabs
} from "../components/styledComponents";

class SignUpLoginPage extends Component {
  constructor() {
    super();
    this.state = { active: false };
  }

  toggleActive = e => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { active } = this.state;
    return (
      <SplashBackground>
        <IntakeWrapper>
          <SignUpLoginTabs>
            <h3 className="login" onClick={this.toggleActive}>
              Login
            </h3>
            <h3 onClick={this.toggleActive}>SignUp</h3>
          </SignUpLoginTabs>
          <Login active={active} refetch={this.props.refetch} />
          <SignUp active={active} refetch={this.props.refetch} />
        </IntakeWrapper>
      </SplashBackground>
    );
  }
}

export default SignUpLoginPage;
