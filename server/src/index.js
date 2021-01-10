const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const JokesDataSource = require('./datasources/JokesDataSource');

// server config
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    jokesAPI: new JokesDataSource(),
  }),
});


// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
}).catch(error => {
  console.error('server error', error);
});
