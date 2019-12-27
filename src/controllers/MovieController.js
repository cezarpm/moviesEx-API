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

    return res.json(movies);
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

    if (!title || !watched) return res.status(400).json({ error: 'All fields are required' });

    const movieUpdated = await Movie.findOneAndUpdate({ title }, { watched }, { new: true });

    return res.json(movieUpdated);
  },
};
