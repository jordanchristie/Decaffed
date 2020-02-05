import React from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { REMOVE_FAVORITE_SHOP } from "../graphql/mutations";

const Favorites = ({ favoriteShops }) => {
  const renderFavorites = () => {
    return favoriteShops.map(shop => {
      return (
        <Favorite key={shop._id}>
          <FavoritesImg src={shop.image_url} alt="shop" />
          <FavoritesOverlay>
            <h3>{shop.name}</h3>
            <p>{shop.address}</p>
            <p>{shop.cityState}</p>
            <Mutation
              mutation={REMOVE_FAVORITE_SHOP}
              variables={{ _id: shop._id }}
            >
              {removeFavoriteShop => {
                return <button onClick={removeFavoriteShop}>Delete</button>;
              }}
            </Mutation>
          </FavoritesOverlay>
        </Favorite>
      );
    });
  };

  console.log(favoriteShops);
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
  position: relative;
`;

const FavoritesImg = styled.img`
  height: 250px;
  width: 250px;
`;

const FavoritesOverlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
