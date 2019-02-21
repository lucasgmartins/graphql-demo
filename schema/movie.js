'use strict'

const { gql } = require('apollo-server-hapi');

const schema = gql`

  scalar Date

  extend type Query {
    movies(name: String): [Movie]
    movie(name: String!): Movie!
    moviesToWatch(page: Int, limit: Int): [Movie]
  }

  extend type Mutation {
    addAsMovieToWatch(imdb_id: String!): Movie
  }

  type Movie {
    name: String!
    title: String!
    year: Int!
    director: String
    writer: String
    actors: String
    languages: String
    ratings: Float
    released: Date
    genres: String
    poster: String!
    imdb_id: String!
    downloadable: Boolean!
  }

`;

module.exports.typeDef = schema;
