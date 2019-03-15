import React, { Component } from "react";

const initialState = {
  name: '', 
  email: '', 
  password: '', 
  confirmedPassword: ''
}

class SignUp extends Component {
  state = { ...initialState };

  render() {
    const { name, email, password, confirmedPassword } = this.state;
    return (
      <form action="">
        <input type="text" name={name} placeholder="Name"/>
        <input type="text" name={email} placeholder="Email"/>
        <input type="text" name={password} placeholder="Password"/>
        <input type="text" name={confirmedPassword} placeholder="Confirm Password"/>
      </form>
    )
  }
}

export default SignUp;