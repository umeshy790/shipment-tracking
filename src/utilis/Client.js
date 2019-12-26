import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

export const client = new ApolloClient({
  uri: "/function/callme/graphql",
  link: createHttpLink({ uri: "/function/callme/graphql" }),
  cache: new InMemoryCache()
});
