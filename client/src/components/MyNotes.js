import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchNotes, editNote, removeNote } from "../actions";

class MyNotes extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  renderNotes = () => {
    this.props.notes.map((note, i) => {
      return (
        <article id={note.id}>
          <img src={note.shop.img_url} alt="" />
          <h3>{note.shop.name}</h3>
          <h4>{note.title}</h4>
          <p>{note.note}</p>
          <button onClick={e => this.props.removeNote(note.id)} />
        </article>
      );
    });
  };
  render() {
    const { notes } = this.props;
    console.log(notes);
    return (
      <div className="notes-list">
        {notes === undefined ? (
          <p>You don't have any notes yet.</p>
        ) : (
          this.renderNotes()
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

export default connect(
  mapStateToProps,
  {
    fetchNotes,
    editNote,
    removeNote
  }
)(MyNotes);
