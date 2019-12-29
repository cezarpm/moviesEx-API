const Movie = require('../models/movieSchema');

module.exports = {

  // POST: /movies
  async store(req, res) {
    const { name, nota } = req.body;

    if (!name || !nota) return res.status(400).json({ error: 'All fields are required' });

    const movieExists = await Movie.exists({ name });

    if (movieExists) {
      console.log('Filme Existe');

      return res.json(movieExists);
    }

    const movie = await Movie.create({
      name,
      nota,
    });

    return res.json(movie);
  },

  // GET: /movies
  async index(req, res) {
    const movies = await Movie.find({}).sort({ rank: 1 });
    const moviesWatched = await Movie.find({ watched: true }).sort({ rank: 1 });
    const moviesNotWatched = await Movie.find({ watched: false }).sort({ rank: 1 });

    const data = {
      movies: [movies],
      moviesWatched: [moviesWatched],
      moviesNotWatched: [moviesNotWatched],
    };
    return res.json(data);
  },

  // DELETE: /movies
  async delete(req, res) {
    const { name } = req.body;

    const movieDeleted = await Movie.findOneAndRemove({ name });

    return res.json(movieDeleted);
  },

  // UPDATE: /movies
  async update(req, res) {
    const { title, watched } = req.body;
    console.log(title, watched);

    let condition = false;

    // if (!title || !watched) return res.status(400).json({ error: 'All fields are required' });

    if (watched === true) { condition = false; }
    if (watched === false) { condition = true; }

    const movieUpdated = await Movie.findOneAndUpdate({ title }, { watched: condition }, { new: true });

    return res.json(movieUpdated);
  },
};
