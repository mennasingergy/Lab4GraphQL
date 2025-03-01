import { ApolloServer } from "apollo-server";
import typeDefs from "../servertype-defs.js";
import resolvers from "../server/resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
