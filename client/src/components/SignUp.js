import React, { Component } from "react";

const initialState = {
  name: '', 
  email: '', 
  password: '', 
  confirmedPassword: ''
}

export default class SignUp extends Component {
  render() {
    return (
      <form action="">
        <input type="text" name="name" placeholder="Name"/>
        <input type="text" name="email" placeholder="Email"/>
        <input type="text" name="password" placeholder="Password"/>
        <input type="text" name="confirmedPassword" placeholder="Confirm Password"/>
      </form>
    )
  }
}