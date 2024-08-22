// graphql/resolvers/index.js
const authResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');

const resolvers = {
  Query: {
    ...authResolver.Query,
    ...eventsResolver.Query,
    ...bookingResolver.Query,
  },
  Mutation: {
    ...authResolver.Mutation,
    ...eventsResolver.Mutation,
    ...bookingResolver.Mutation,
  },
};

module.exports = resolvers;

