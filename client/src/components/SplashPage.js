import React from "react";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  SplashBackground,
  Splash,
  Title,
  Tagline,
  IntakeButton
} from "./styledComponents";

const SplashPage = ({ session }) => (
  <SplashBackground>
    <Splash>
      <Title>Decaffed</Title>
      <Tagline>Find a coffee shop nearby to recaffeinate.</Tagline>
      <IntakeButton bg="#333" href="/auth/github">
        Login with Github
      </IntakeButton>
      <IntakeButton bg="#3f51b5" href="/auth/google">
        Login with Google
      </IntakeButton>
      <IntakeButton bg="#1da1f2" href="/auth/twitter">
        Login with Twitter
      </IntakeButton>
      <Link to="/signup" style={{ background: "#1da1f2" }}>
        Sign Up
      </Link>
    </Splash>
  </SplashBackground>
);

export default SplashPage;
