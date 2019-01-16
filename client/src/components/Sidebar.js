import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer'
import { Home, Map, Notes } from '@material-ui/icons'


class Sidebar extends Component {


    render() {
        return (
                <Drawer anchor="left" open={this.props.isOpen}>
                    <NavTitle>Decaffed.</NavTitle>
                    <NavList>
                        <Home />
                        <Link to="/dashboard">Dashboard</Link> 
                        <Map />
                        <Link to="/map">Map</Link> 
                        <Notes />
                        <Link to="/mynotes">My Notes</Link>        
                    </NavList>
                </Drawer>
        )
    }

}

export default Sidebar;

const NavTitle = styled.p`
    text-align: center;
`

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
`