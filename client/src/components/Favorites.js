import React, { Component } from "react";
import styled from "styled-components";

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

export default Favorites;

const FavoritesList = styled.section``;
