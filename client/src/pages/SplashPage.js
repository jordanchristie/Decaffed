import React from "react";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  SplashBackground,
  SplashContent,
  Title,
  Tagline,
  ActionButton
} from "../components/styledComponents";

const SplashPage = ({ session }) => (
  <SplashBackground>
    <SplashContent>
      <Title>Decaffed</Title>
      <Tagline>Find a coffee shop nearby to recaffeinate.</Tagline>
      <ActionButton bg="#333" href="/auth/github">
        Login with Github
      </ActionButton>
      <ActionButton bg="#3f51b5" href="/auth/google">
        Login with Google
      </ActionButton>
      <ActionButton bg="#1da1f2" href="/auth/twitter">
        Login with Twitter
      </ActionButton>
      <ActionButton as={Link} to="/signup" bg="#1da1f2">
        Sign Up
      </ActionButton>
    </SplashContent>
  </SplashBackground>
);

export default SplashPage;
