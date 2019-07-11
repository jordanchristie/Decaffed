import React, { Component } from "react";
import styled from "styled-components";

class Notes extends Component {
  renderNotes = () => {
    const { notes } = this.props;

    notes.map(note => {
      return (
        <article key={note.id}>
          {note.title}
          {note.note}
        </article>
      );
    });
  };
  render() {
    return (
      <NotesList>
        {this.props.Notes ? (
          this.renderNotes()
        ) : (
          <p>You don't have any notes yet.</p>
        )}
      </NotesList>
    );
  }
}

export default Notes;

const NotesList = styled.section``;
