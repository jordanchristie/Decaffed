import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({ uri: "http://localhost:5000/graphql" });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  const authorization = token ? `Bearer ${token}` : "";
  return {
    headers: {
      ...headers,
      authorization
    }
  };
});

const link = authLink.concat(httpLink);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

export default client;
