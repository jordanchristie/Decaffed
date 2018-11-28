import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    render() {
        return (
            <section className="sidebar">
                <ul>
                    <li>Dashboard</li>
                    <li>Map</li>
                    <li>My Notes</li>
                </ul>

            </section>
        )
    }

}