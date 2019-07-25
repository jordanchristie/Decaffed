import React, { useState } from "react";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import {
  SplashBackground,
  IntakeWrapper,
  SignUpLoginTabs
} from "../components/styledComponents";

const SignUpLoginPage = ({ refetch }) => {
  const [active, toggleActive] = useState("login");

  const checkActive = tab => {
    return active === tab;
  };

  console.log(active === "login");
  return (
    <SplashBackground>
      <IntakeWrapper>
        <SignUpLoginTabs>
          <h3 className="login" onClick={() => toggleActive("login")}>
            Login
          </h3>
          <h3 onClick={() => toggleActive("signup")}>SignUp</h3>
        </SignUpLoginTabs>
        {checkActive("login") ? (
          <Login refetch={refetch} />
        ) : (
          <SignUp refetch={refetch} />
        )}
      </IntakeWrapper>
    </SplashBackground>
  );
};

export default SignUpLoginPage;
