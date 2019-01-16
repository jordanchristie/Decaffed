import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addNote } from '../actions';


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
    }

    handleNoteChange = (e) => {
        this.setState({note: e.target.value})
    }

    submitNote = () => {
        const note = {
            title: this.state.title,
            note: this.state.note
        }
        this.props.addNote(note)
        this.props.closeNote();
        this.resetNote();
    }

    resetNote = () => {
        this.setState({
            title: '',
            note: ''
        })
    }

    render() {
        const {shop} = this.props
        return (
            <NoteWrapper>
                <i className="fa fa-window-close fa-3x" onClick={this.props.closeNote}></i>
                <ShopName>{shop.name}</ShopName>
                <label htmlFor="title">Title</label>
                <input type="text" onChange={this.handleTitleChange}/>
                <label htmlFor="note">Note</label>
                <textarea name="note" id="" cols="30" rows="10" onChange={this.handleNoteChange}></textarea>
                <button onClick={this.submitNote}>Submit</button>
            </NoteWrapper>
        )
    }
}

export default connect(null, { addNote })(Note);

const NoteWrapper = styled.section`
    position: absolute;
    top: -57%;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.8);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    color: #fff;
    transition: all .5s ease-in;
`

const ShopName = styled.h3`
    text-align: center;
`