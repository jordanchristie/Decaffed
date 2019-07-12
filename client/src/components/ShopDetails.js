import React, { Component } from "react";
import { Mutation } from "react-apollo";
//import { Spring } from 'react-spring';
import styled from "styled-components";

import Note from "./Note";
import { GET_USER } from "../graphql/queries";
import { ADD_FAVORITE_SHOP } from "../graphql/mutations";

class ShopDetails extends Component {
  constructor() {
    super();
    this.state = {
      favorited: false,
      noteOpen: false
    };
  }

  toggleFavorite = (e, addFavoriteShop) => {
    e.preventDefault();

    this.setState({ favorited: !this.state.favorited });

    if (this.state.favorited === false) {
      addFavoriteShop(this.props.shop);
    } else {
      this.props.removeFavorite(this.props.shop.id);
    }
  };

  openNote = () => {
    this.setState({ noteOpen: true });
  };

  closeNote = () => {
    this.setState({ noteOpen: false });
  };

  render() {
    const {
      name,
      image_url,
      address,
      cityState,
      phone,
      rating
    } = this.props.shop;
    console.log(this.props.shop);
    const backgroundStyle = {
      background: `url(${image_url}) no-repeat center`,
      backgroundSize: "cover"
    };
    return (
      <ShopInfo style={backgroundStyle} background={image_url}>
        <Overlay>
          <h2>{name}</h2>
          <FaIcon type="fa fa-envelope" />
          {address} <br />
          {cityState}
          <FaIcon type="fa fa-phone" />
          {phone}
          <br />
          <FaIcon type="fa fa-star" />
          {rating}/5
          <br />
          <OpenNoteButton onClick={this.openNote}>Add Note</OpenNoteButton>
          <Mutation
            mutation={ADD_FAVORITE_SHOP}
            variables={{ name, image_url, address, cityState }}
            refetchQueries={[{ query: GET_USER }]}
          >
            {addFavoriteShop => {
              return (
                <FaIcon
                  favorited={this.state.favorited}
                  type="fa fa-heart "
                  onClick={e => this.toggleFavorite(e, addFavoriteShop)}
                >
                  {this.state.favorited
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
                </FaIcon>
              );
            }}
          </Mutation>
        </Overlay>
        {this.state.noteOpen ? (
          <Note shop={this.props.shop} closeNote={this.closeNote} />
        ) : null}
      </ShopInfo>
    );
  }
}

export default ShopDetails;

const ShopInfo = styled.section`
  position: absolute;
  bottom: 0;
  height: 60vh;
  width: 100%;
  background: url(${props => props.background}) no-repeat center;
  background-size: cover;
`;

const Overlay = styled.article`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const OpenNoteButton = styled.button`
  margin: 1em;
`;

const FaIcon = styled.i.attrs(props => ({
  className: props.type
}))`
  color: ${props => (props.favorited ? "red" : "fff")};
`;
