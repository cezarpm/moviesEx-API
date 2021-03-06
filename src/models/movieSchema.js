const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
  rank: Number,
  title: String,
  nota: Number,
  img: String,
  watched: Boolean,
});

module.exports = model('Movie', MovieSchema);
