const moongose = require('mongoose');

const app = require('./configs/custom-express');

const port = 8000;

moongose.connect('mongodb://localhost:27017/moviesex', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen(port, () => {
  console.log(`Server running in the port ${port}`);
});
