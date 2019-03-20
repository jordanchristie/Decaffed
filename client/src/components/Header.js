import React, { Component } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Sidebar from './Sidebar';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { sideBarOpen: false }
    }

    toggleSidebar = (e) => {
        e.preventDefault();

        this.setState({sideBarOpen: !this.state.sideBarOpen})
    }


    render() {
        return (
            <Navbar>
                <AppBar>
                    <Toolbar>
                        <IconButton onClick={this.toggleSidebar}>
                            <Menu />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Sidebar isOpen={this.state.sideBarOpen} toggleSidebar={this.toggleSidebar} />
            </Navbar>
        )
    }
}

export default Header;

const Navbar = styled.nav`
    
`

const Menu = styled(MenuIcon)`
    color: white;
    height: 60px;
`