import React, { Component } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { ADD_NOTE } from "../graphql/mutations";
import { NoteInput, ActionButton } from "./styledComponents";

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
      shop: { name, cityState: location }
    } = this.props;
    return (
      <Mutation mutation={ADD_NOTE} variables={{ title, note, name, location }}>
        {addNote => {
          return (
            <NoteWrapper>
              <NoteHeader>
                <p>Cancel</p>
                <p>Save</p>
              </NoteHeader>
              <ShopName>{name}</ShopName>
              <label htmlFor="title">Title</label>
              <NoteInput
                type="text"
                name="title"
                value={title}
                placeholder="Title (optional)"
                onChange={this.handleChange}
              />
              <label htmlFor="note">Note</label>
              <NoteInput
                id=""
                cols="30"
                rows="10"
                name="note"
                value={note}
                placeholder="Add text to your note"
                onChange={this.handleChange}
              />
              <ActionButton onClick={e => addNote(e, addNote)}>
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
  height: 75vh;
  width: 75vw;
  background: #fff;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: #fff;
  transition: all 0.5s ease-in;
`;

const ShopName = styled.h3`
  text-align: center;
`;

const NoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
