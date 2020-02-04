import styled from "styled-components";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

// Splash Page
export const SplashBackground = styled.main`
  height: 100vh
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://media.giphy.com/media/kQHPwJmJxKzyU/giphy.gif") no-repeat
      center center;
  background-size: cover;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SplashContent = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 5em;
  margin-bottom: 0;
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

  &.note-submit {
    margin: 3em 0 0.75em;
  }
`;

// SignUp / Login

export const IntakeForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background: white;
  width: 50vw;
  margin: 0 auto;
  padding: 20px;
  color: #333;
  }
`;

export const IntakeInput = styled(TextField)`
  font-size: 2em;
  margin: 0.5em;
  outline: 0;
`;

export const ErrorMessage = styled.p`
  color: red;
`

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
  justify-content: center;
  padding: 10%;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 1em;
`;

export const FieldLabel = styled(InputLabel)``;

export const NoteInput = styled(TextField)``;
