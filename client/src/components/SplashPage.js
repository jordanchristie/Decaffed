import React from "react";
// import { Redirect } from "react-router-dom";
import {
  SplashBackground,
  Splash,
  Title,
  Tagline,
  SignUpButton
} from "./styledComponents";

const SplashPage = ({ session }) => (
  <SplashBackground>
    <Splash>
      <Title>Decaffed</Title>
      <Tagline>Find a coffee shop nearby to recaffeinate.</Tagline>
      <SignUpButton bg="#333" href="/auth/github">
        Login with Github
      </SignUpButton>
      <SignUpButton bg="#3f51b5" href="/auth/google">
        Login with Google
      </SignUpButton>
      <SignUpButton bg="#1da1f2" href="/auth/twitter">
        Login with Twitter
      </SignUpButton>
      <SignUpButton bg="#1da1f2" href="/signup">
        Sign Up
      </SignUpButton>
    </Splash>
  </SplashBackground>
);

export default SplashPage;
