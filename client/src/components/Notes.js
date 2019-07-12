import React from "react";
import styled from "styled-components";

const Notes = ({ notes }) => {
  console.log(notes);
  const renderNotes = () => {
    notes.map(note => {
      return (
        <article key={note.note}>
          hello
          {note.title}
          {note.note}
          {note.name}
          {note.location}
        </article>
      );
    });
  };
  return (
    <NotesList>
      {notes ? renderNotes() : <p>You don't have any notes yet.</p>}
    </NotesList>
  );
};

export default Notes;

const NotesList = styled.section`
  display: flex;
  flex-direction: row;
`;
