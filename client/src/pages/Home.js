import React from "react";
import SearchBar from "../components/SearchBar";

const Home = ({ user }) => {
  const { name } = user.getUser;
  return (
    <>
      <h1>Welcome {name}</h1>
      <SearchBar />
    </>
  );
  // <Query query={GET_USER} variables={{ _id: 102694616703030500000 }}>
  // {(data, loading, error) => {
  //     console.log(data)
  //     if (loading) return <h1>Loading...</h1>
  //     return (
  //         <>
  //             <h1>Welcome</h1>
  //             <SearchBar />
  //         </>
  //     )
  // }}
  // </Query>
};

export default Home;
