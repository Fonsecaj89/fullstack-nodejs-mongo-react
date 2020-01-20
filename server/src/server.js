import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers} from './Graphql/Books';

// Put together a schema
const server = new ApolloServer({ typeDefs, resolvers });;

// Create an express server and a GraphQL endpoint
const app = express();
const path = '/graphql';
server.applyMiddleware({ app, path });


app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));