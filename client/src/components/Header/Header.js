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

    handleOutsideClick = (e) => {
        
        if (!this.ref.contains(e.target)) {
            this.toggleSidebar();
        }
    }

    ref = React.createRef();

    render() {
        return (
            <div>
                <section className="header">
                    <i className="fa fa-bars fa-3x"
                    onClick={this.toggleSidebar}></i>
                </section>
                <Sidebar ref={this.ref} isOpen={this.state.sideBarOpen} />
            </div>
        )
    }
}

export default Header;