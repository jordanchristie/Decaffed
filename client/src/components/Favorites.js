import React from "react";
import styled from "styled-components";

const Favorites = ({ favoriteShops }) => {
  const renderFavorites = () => {
    return favoriteShops.map(shop => {
      return (
        <Favorite key={shop.address}>
          <FavoritesImg src={shop.image_url} alt="shop" />
        </Favorite>
      );
    });
  };

  return (
    <FavoritesList>
      {favoriteShops ? (
        renderFavorites()
      ) : (
        <p>You don't have any favorites yet.</p>
      )}
    </FavoritesList>
  );
};

export default Favorites;

const FavoritesList = styled.section`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  white-space: nowrap;
`;

const Favorite = styled.article`
  height: 250px;
  width: 250px;
`;

const FavoritesImg = styled.img`
  height: 250px;
  width: 250px;
`;
