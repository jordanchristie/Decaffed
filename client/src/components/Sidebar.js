import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer'
import { Home, Map, Notes } from '@material-ui/icons'


class Sidebar extends Component {

    render() {
        const { isOpen } = this.props;
        return (
                <AppDrawer anchor="left" 
                    open={isOpen}
                    >
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

                        <NavLink to="/auth/logout">
                            Log Out
                        </NavLink>       
                    </NavList>
                </AppDrawer>
        )
    }

}

export default Sidebar;

const AppDrawer = styled(Drawer)`
    width: 50vw;
`

const NavTitle = styled.a`
    text-align: center;
`

const NavList = styled.ul`
    display: flex;
    flex-flow: column wrap;
    padding: 10%;
`

const NavLink = styled(Link)`
    text-decoration: none;
    margin: 1em;
`