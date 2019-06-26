import React from "react";
import { AppDrawer, NavTitle, NavList, NavLink } from "./styledComponents";

import { Home, Map, Notes } from "@material-ui/icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <AppDrawer anchor="left" open={isOpen} onClose={toggleSidebar}>
      <NavTitle href="/">Decaffed.</NavTitle>
      <NavList>
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

        <NavLink to="/auth/logout">Log Out</NavLink>
      </NavList>
    </AppDrawer>
  );
};

export default Sidebar;
