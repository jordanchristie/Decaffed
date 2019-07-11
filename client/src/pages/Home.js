import React from "react";
import SearchBar from "../components/SearchBar";
import Favorites from "../components/Favorites";
import Notes from "../components/Notes";
import styled from "styled-components";

const Home = ({ user }) => {
  const { username } = user;
  return (
    <Dashboard>
      <h1>Welcome {username}!</h1>
      <SearchBar />

      <h2>Favorites</h2>
      <Favorites />
      <h2>Notes</h2>
      <Notes />
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
