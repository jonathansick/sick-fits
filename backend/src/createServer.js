// File for creating the GraphQL Yoga server

const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

// Create the GraphQL Yoga server
function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      // See resolvers/Mutation.js and resolvers/Query.js
      Query, // ES6 auto maps keys to variables if name is same
      Mutation,
    },
    resolverValidationOptions: {
      // Wes needed this to get it to work
      requireResolversForResolveType: false,
    },
    // Context available when dealing with a request
    context: req => ({ ...req, db }),
  });
}

module.exports = createServer;
