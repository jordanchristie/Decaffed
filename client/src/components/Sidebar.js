import React from "react";
import { withApollo, compose } from "react-apollo";
import { withRouter } from "react-router-dom";
import { AppDrawer, NavTitle, NavList, NavLink } from "./styledComponents";

import { Home, Map, Notes } from "@material-ui/icons";

const Sidebar = ({ client, history, isOpen, toggleSidebar }) => {
  const logout = () => {
    localStorage.removeItem("token");
    client.resetStore();
    history.push("/");
  };
  return (
    <AppDrawer anchor="left" open={isOpen} onClose={toggleSidebar}>
      <NavTitle href="/">Decaffed.</NavTitle>
      <NavList onClick={toggleSidebar}>
        <NavLink to="/dashboard">
          <Home />
          Dashboard
        </NavLink>

        <NavLink to="/map">
          <Map />
          Map
        </NavLink>

        <NavLink to="/mynotes">
          <Notes />
          My Notes
        </NavLink>

        <NavLink as="p" onClick={logout}>
          Log Out
        </NavLink>
      </NavList>
    </AppDrawer>
  );
};

export default compose(withRouter, withApollo)(Sidebar);
