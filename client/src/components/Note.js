import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { ADD_NOTE } from '../graphql/mutations';

const initialState = {
    title: '',
    note: ''
}

class Note extends Component {
    
    state = { ...initialState };

    handleChange = (e) => {
        const { name, value } = e.target;
        
        this.setState({ [name]: value })
    }

    submitNote = (e, addNote) => {
        addNote().then(console.log('note added'))
    }

    resetNote = () => {
        this.setState({ ...initialState })
    }

    render() {
        const { title, note } = this.state;
        const {shop} = this.props
        return (
            <Mutation mutation={ADD_NOTE} variables={{title, note}}>
            {addNote  => {
                return (
                <NoteWrapper>
                    <i className="fa fa-window-close fa-3x" onClick={this.props.closeNote}></i>
                    <ShopName>{shop.name}</ShopName>
                    <label htmlFor="title">Title</label>
                    <input type="text"
                        name="title"
                        value={title}
                        onChange={this.handleChange}/>
                    <label htmlFor="note">Note</label>
                    <textarea id="" cols="30" rows="10"
                            name="note"
                            value={note} 
                            onChange={this.handleChange}></textarea>
                    <button onClick={e => this.submitNote(e, addNote)}>Submit</button>
                </NoteWrapper>
                )
            }}
            </Mutation>
        )
    }
}

export default Note;

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