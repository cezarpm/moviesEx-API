const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
  rank: Number,
  title: String,
  nota: Number,
});

module.exports = model('Movie', MovieSchema);
