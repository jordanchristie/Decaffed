import React from "react";
import SearchBar from "../components/SearchBar";
import Favorites from "../components/Favorites";
import Notes from "../components/Notes";
import styled from "styled-components";

const Home = ({ user }) => {
  const { username, favoriteShops, notes } = user;
  return (
    <Dashboard>
      <h1>Welcome {username}!</h1>
      <SearchBar />

      <DashboardTitle>Favorites</DashboardTitle>
      <Favorites favoriteShops={favoriteShops} />
      <DashboardTitle>Notes</DashboardTitle>
      <Notes notes={notes} />
    </Dashboard>
  );
};

export default Home;

const Dashboard = styled.main`
  h1,
  h2 {
    margin-left: 5%;
  }
`;

const DashboardTitle = styled.h2`
  opacity: 0.7;
`;
