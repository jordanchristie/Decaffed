import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Sidebar from "./Sidebar";

export default function Header() {
  const [sideBarOpen, toggleSidebar] = useState(false);

  return (
    <Navbar>
      <AppBar style={{ position: "relative" }}>
        <Toolbar>
          <IconButton onClick={() => toggleSidebar(!sideBarOpen)}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar
        isOpen={sideBarOpen}
        toggleSidebar={() => toggleSidebar(!sideBarOpen)}
      />
    </Navbar>
  );
}

const Navbar = styled.nav``;

const Menu = styled(MenuIcon)`
  color: white;
  height: 60px;
`;
