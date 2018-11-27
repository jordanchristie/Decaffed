import React, { Component } from 'react';

import './Note.css';

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            note: ''
        }
    }

    handleTitleChange = (e) => {
        this.setState({title: e.target.value})
        console.log(this.state.title)
    }

    handleNoteChange = (e) => {
        this.setState({note: e.target.value})
        console.log(this.state.note)
    }

    addNote = () => {
        const note = {
            title: this.state.title,
            note: this.state.note
        }
        console.log(note);
        this.props.closeNote();
    }

    render() {
        const {shop} = this.props
        return (
            <section className="note">
                <i className="fa fa-window-close fa-3x" onClick={this.props.closeNote}></i>
                <h3>{shop.name}</h3>
                <label htmlFor="title">Title</label>
                <input type="text" onChange={this.handleTitleChange}/>
                <label htmlFor="note">Note</label>
                <textarea name="note" id="" cols="30" rows="10" onChange={this.handleNoteChange}></textarea>
                <button onClick={this.addNote}>Submit</button>
            </section>
        )
    }
}

export default Note;