const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    appName: Int
  }
`;

const resolvers = {
  Query: {
    appName: () => 2,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(() => {
  console.log("Listening on port 4000");
});
