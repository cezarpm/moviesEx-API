const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
  name: String,
});

module.exports = model('Movie', MovieSchema);
