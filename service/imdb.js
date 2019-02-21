'use strict'

//###################################
// NODE_MODULES
//###################################

const imdb    = require('imdb-api');
const _       = require('lodash');

//###################################
// CONST
//###################################

const API_KEY = process.env.GRAPHQL_DEMO_IMDB_KEY;

//###################################
// INIT
//###################################

class IMDBService {

  constructor() {
    this.cli = new imdb.Client({ apiKey: API_KEY });
  }

  async search(name) {

    const { results } = await this.cli.search({ name });

    return _.map(results, movie => {
      movie.imdb_id = movie.imdbid
      return movie;
    });
  }

  async get(obj) {

    const result = await this.cli.get(obj);
    return result;
  }

}

module.exports = new IMDBService();