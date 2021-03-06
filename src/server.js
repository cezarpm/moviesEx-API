const moongose = require('mongoose');

const app = require('./configs/custom-express');
const Seed = require('./data/seedingService');

const port = process.env.PORT || 9000;

// Seeding
Seed.seed();

moongose.connect(process.env.CONNSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(port, () => console.log(`Server running in the port ${port}`));
