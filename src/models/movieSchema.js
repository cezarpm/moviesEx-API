const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
  name: String,
  nota: Number,
});

module.exports = model('Movie', MovieSchema);
