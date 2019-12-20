const mongoose = require('mongoose');

const { Schema } = mongoose;

const MovieSchema = new Schema({
  id: { type: Number, unique: true },
  name: String,
});

module.exports = MovieSchema;
