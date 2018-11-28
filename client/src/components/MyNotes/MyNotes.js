import React, { Component } from 'react';

class MyNotes extends Component {
    renderNotes = () => {
        this.props.notesList.map((note, i) => {
            return (
                <article id={note.id}>
                    <img src={note.shop.img_url} alt=""/>
                    <h3>{note.shop.name}</h3>
                    <h4>{note.title}</h4>
                    <p>{note.note}</p>
                </article>
            )
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