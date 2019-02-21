'use strict'

//###################################
// NPM MODULES
//###################################

const casual    = require('casual');

//###################################
// LOCAL MODULES
//###################################

const IMDBService = require('../service/imdb');
const MovieDB     = require('../service/db');

//###################################
// INIT
//###################################

const Query = {
  movies: async (parent, { name }) => {
    return await IMDBService.search(name)
  },
  movie: async (parent, { name }) => {
    return await IMDBService.get({name});
  },
  moviesToWatch: async () => {

    const promises = MovieDB.list()
      .map(imdb_id => IMDBService.get({ id : imdb_id }));

    return Promise.all(promises);
  }
}

const Mutation =  {
  addAsMovieToWatch: async (parent, { imdb_id }) => {
    MovieDB.add(imdb_id);
    return await IMDBService.get({ id : imdb_id });
  }
}

const Movie = {
  downloadable: () => {
    return casual.boolean;
  }
}

module.exports = { Query, Mutation, Movie };
