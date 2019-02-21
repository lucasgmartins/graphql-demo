'use strict'

//###################################
// NODE_MODULES
//###################################

const imdb    = require('imdb-api');

//###################################
// CONST
//###################################


//###################################
// INIT
//###################################

class MovieDB {

  constructor() {
    this.favorites = [];
  }

  add(imdb_id) {
    this.favorites.push(imdb_id)
    return imdb_id;
  }

  list() {
    return this.favorites;
  }

}

module.exports = new MovieDB();