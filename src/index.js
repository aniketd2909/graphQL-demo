const { ApolloServer } = require("apollo-server");
const { readSchema } = require("./schema.js");
const { resolvers } = require("./resolvers.js");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const typeDefs = readSchema();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(4001).then(() => {
  console.log("Listening on port 4001");
});
