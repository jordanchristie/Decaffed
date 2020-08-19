import React from "react";

import styled from "styled-components";
import { NavTitle, NavList, NavLink } from "./styledComponents";

const Header = ({ user, client, history }) => {
  const logout = () => {
    localStorage.removeItem("token");
    client.resetStore();
    history.push("/");
  };

  return (
    <Navbar>
      <NavTitle href="/">Decaffed.</NavTitle>
      <NavList>
        {user ? (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>

            <NavLink to="/map">Map</NavLink>

            <NavLink to="/mynotes">My Notes</NavLink>

            <NavLink as="p" onClick={logout}>
              Log Out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/search">Coffee Shops</NavLink>
            <NavLink to="/signup">Login</NavLink>
          </>
        )}
      </NavList>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
`;
