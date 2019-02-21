'use strict';

//###################################
// NODE_MODULES
//###################################

const nconf                 = require('nconf');
const Hapi                  = require('hapi');
const _                     = require('lodash');
const { ApolloServer }      = require('apollo-server-hapi');

let x = require('./schema/schema');

const server = Hapi.server({ host: 'localhost', port: 9000 });

async function bootstrap() {

  server.log(['error', 'database', 'read']);

  const apollo = new ApolloServer(x);

  await apollo.applyMiddleware({ app: server });

  await apollo.installSubscriptionHandlers(server.listener);
  await server.start();

  console.log(`Server running at: ${server.info.uri}`);

};

bootstrap()
  .catch(err => console.log(err));

module.exports = server;

