import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

class Sidebar extends Component {

    render() {
        return (
                <section className={'sidebar ' + (this.props.isOpen ? 'sidebar-active' : '') }>
                    <p>Decaffed.</p>
                    <ul>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/map">Map</Link>
                        <Link to="/myNotes">My Notes</Link>
                    </ul>
                </section>
        )
    }

}

export default Sidebar;