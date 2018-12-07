import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { sideBarOpen: false }
    }

    toggleSidebar = () => {
        this.setState({sideBarOpen: !this.state.sideBarOpen})
    }

    render() {
        return (
            <div>
                <section className="header">
                    <i className="fa fa-bars fa-3x"
                    onClick={this.toggleSidebar}></i>
                </section>
                <Sidebar isOpen={this.state.sideBarOpen} />
            </div>
        )
    }
}

export default Header;