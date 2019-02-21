
'use strict'

const _                        = require('lodash');
const { gql }                  = require('apollo-server-hapi');

//###################################
// SCHEMAS
//###################################

const Movie            = require('./movie');

//###################################
// RESOLVERS
//###################################

const MovieResolver    = require('../resolver/movie');

//###################################
// Init
//###################################

const Query = gql`
  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    empyt(empty: String): Boolean
  }
`;

const schemas = [ Movie ];

module.exports = {
  typeDefs: [ Query, Mutation, ..._.map(schemas, 'typeDef')],
  resolvers: _.merge(MovieResolver),
};
