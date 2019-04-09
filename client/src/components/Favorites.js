import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchFavorites } from "../actions";

class Favorites extends Component {
  renderFavorites = () => {
    const { favoriteShops } = this.props;

    favoriteShops.map(shop => {
      return (
        <article key={shop.id}>
          <img src={shop.url} alt="shop" />
        </article>
      );
    });
  };
  render() {
    return (
      <FavoritesList>
        {this.props.favoriteShops ? (
          this.renderFavorites()
        ) : (
          <p>You don't have any favorites yet.</p>
        )}
      </FavoritesList>
    );
  }
}

const mapStateToProps = ({ favoritedShops }) => {
  return { favoritedShops };
};

export default connect(
  mapStateToProps,
  { fetchFavorites }
)(Favorites);

const FavoritesList = styled.section``;
