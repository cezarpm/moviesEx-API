const Movie = require('../models/movieSchema');

const moviesSeeds = require('../../rotten.json');

module.exports = {
  async seed() {
    const movieExists = await Movie.findOne({});

    if (!movieExists) {
      console.log('Não tem nada no db');

      await Movie.insertMany(moviesSeeds, (err) => {
        if (err) console.log(err);
      });
    }
    console.log('DB sincronizado');

    return true;
  },
};
