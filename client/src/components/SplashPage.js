import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const SplashPage = ({ session }) => (
  <Splash>
    {session.getUser ? (
      <Redirect to="/dashboard" />
    ) : (
      <>
        <Title>Decaffed</Title>
        <Tagline>Find a coffee shop nearby to recaffeinate.</Tagline>
        <SignUp bg="#333" href="/auth/github">
          Login with Github
        </SignUp>
        <SignUp bg="#3f51b5" href="/auth/google">
          Login with Google
        </SignUp>
        <SignUp bg="#1da1f2" href="/auth/twitter">
          Login with Twitter
        </SignUp>
        <SignUp bg="#1da1f2" href="/signup">
          Sign Up
        </SignUp>
      </>
    )}
  </Splash>
);

export default SplashPage;

const Splash = styled.section`
  height: 100vh;
  margin-top: 56px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://media.giphy.com/media/kQHPwJmJxKzyU/giphy.gif") no-repeat
      center center;
  background-size: cover;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5em;
  margin: 0;
`;

const Tagline = styled.h3`
  font-size: 3em;
  width: 75%;
  margin: 0;
`;

const SignUp = styled.a`
  cursor: pointer;
  background: ${props => props.bg};
  text-decoration: none;
  border: none;
  border-radius: 0.2em;
  color: #fff;
  padding: 0.5em 1em;
  margin: 0.5em 0 0.75em;
  font-size: 24px;
`;
