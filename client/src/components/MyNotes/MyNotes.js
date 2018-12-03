import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyNotes extends Component {
    renderNotes = () => {
        this.props.notes.map((note, i) => {
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
                {this.props.notes ? 
                    this.renderNotes()
                :   <p>You don't have any notes yet.</p>
                }
            </div>
        )
    }
}

const mapStateToProps = ({notes}) => {
    return { notes }
}

export default connect(mapStateToProps, null)(MyNotes);