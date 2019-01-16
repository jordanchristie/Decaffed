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
            <>
                <AppBar>
                    <Toolbar>
                        <IconButton>
                            <Menu onClick={this.toggleSidebar} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Sidebar isOpen={this.state.sideBarOpen} />
            </>
        )
    }
}

export default Header;

const Menu = styled(MenuIcon)`
    color: white;
`