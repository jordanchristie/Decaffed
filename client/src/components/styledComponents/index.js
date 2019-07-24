import styled from "styled-components";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Input from "@material-ui/core/Input";

// Splash Page
export const SplashBackground = styled.main`
  height: 100vh
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://media.giphy.com/media/kQHPwJmJxKzyU/giphy.gif") no-repeat
      center center;
  background-size: cover;
  color: #fff;
  text-align: center;
`;

export const Splash = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 5em;
  margin: 2em 0 0 0;
`;

export const Tagline = styled.h3`
  font-size: 3em;
  width: 75%;
  margin: 0;
`;

export const ActionButton = styled.button`
  cursor: pointer;
  background: ${props => props.bg};
  border: none;
  border-radius: 0.2em;
  color: #fff;
  padding: 0.5em 1em;
  margin: 0.5em 0 0.75em;
  font-size: 24px;
  text-decoration: none;
`;

// SignUpLogin Page
export const IntakeWrapper = styled.section`
  background: white;
  width: 60vw;
  margin: 10vw auto;
  color: #333;
`;

export const SignUpLoginTabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  h3 {
    width: 50%;
    margin: 0;
    cursor: pointer;
  }

  .login {
    border-right: 1px solid #333;
  }

  &.active {
    border-bottom: 1px solid #333;
  }
`;

export const IntakeForm = styled.form`
  display: ${props => (props.active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const IntakeInput = styled(Input)`
  font-size: 2em;
  margin: 0.5em;
  outline: 0;
`;

// Sidebar
export const AppDrawer = styled(Drawer)`
  width: 50vw;
`;

export const NavTitle = styled.a`
  text-align: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  padding: 10%;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 1em;
`;

export const NoteInput = styled(Input)``;
