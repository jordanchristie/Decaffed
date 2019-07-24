import React, { Component } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { ADD_NOTE } from "../graphql/mutations";
import { FieldLabel, NoteInput, ActionButton } from "./styledComponents";

const initialState = {
  title: "",
  note: ""
};

class Note extends Component {
  state = { ...initialState };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  submitNote = (e, addNote) => {
    addNote().then(console.log("note added"));
  };

  resetNote = () => {
    this.setState({ ...initialState });
  };

  render() {
    const { title, note } = this.state;
    const {
      closeNote,
      shop: { name, cityState: location }
    } = this.props;
    return (
      <Mutation mutation={ADD_NOTE} variables={{ title, note, name, location }}>
        {addNote => {
          return (
            <NoteWrapper>
              <NoteHeader>
                <p onClick={closeNote}>&#215;</p>
              </NoteHeader>
              <ShopName>{name}</ShopName>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <NoteInput
                type="text"
                name="title"
                value={title}
                placeholder="Title (optional)"
                onChange={this.handleChange}
              />
              <FieldLabel htmlFor="note">Note</FieldLabel>
              <NoteInput
                id=""
                multiline={true}
                name="note"
                value={note}
                placeholder="Add text to your note"
                onChange={this.handleChange}
              />
              <ActionButton
                className="note-submit"
                onClick={e => addNote(e, addNote)}
              >
                Add Note
              </ActionButton>
            </NoteWrapper>
          );
        }}
      </Mutation>
    );
  }
}

export default Note;

const NoteWrapper = styled.section`
  position: absolute;
  top: -43%;
  left: 10%;
  width: 75vw;
  background: #fff;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: #333;
  transition: all 0.5s ease-in;
  border: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const ShopName = styled.h3`
  text-align: center;
`;

const NoteHeader = styled.div`
  width: 100%;

  p {
    font-size: 40px;
    margin: 0 0 0 90%;
    cursor: pointer;
  }
`;
