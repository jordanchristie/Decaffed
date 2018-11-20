import React, { Component } from 'react';

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            note: ''
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>I am the NOTE!</h1>
                <input type="text"/>
                <textarea name="note" id="" cols="30" rows="10"></textarea>
            </div>
        )
    }
}

export default Note;