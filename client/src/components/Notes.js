import React from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { DELETE_NOTE } from "../graphql/mutations";

const Notes = ({ notes }) => {
  const renderNotes = () =>
    notes.map(note => (
      <NoteCard key={note.note}>
        <h4>{note.name}</h4>
        <h5>{note.location}</h5>
        <p>{note.title}</p>
        <p>{note.note}</p>
        <Mutation mutation={DELETE_NOTE} variables={{ _id: note._id }}>
          {deleteNote => <button onClick={deleteNote}>Delete</button>}
        </Mutation>
      </NoteCard>
    ));
  return (
    <NotesList>
      {notes.length ? renderNotes() : <p>You don't have any notes yet.</p>}
    </NotesList>
  );
};

export default Notes;

const NotesList = styled.section`
  display: flex;
  flex-direction: row;
`;

const NoteCard = styled.article`
  height: 250px;
  width: 250px;
  text-align: center;
  border: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  h5 {
    margin: 0;
    opacity: 0.7;
  }
`;
