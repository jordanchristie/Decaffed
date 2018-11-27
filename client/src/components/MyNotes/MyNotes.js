import React, { Component } from 'react';

class MyNotes extends Component {
    renderNotes = () => {
        this.props.notesList.map((note, i) => {
            
        })
    }
    render() {
        return (
            <div className="notes-list">
                {this.renderNotes()}
            </div>
        )
    }
}