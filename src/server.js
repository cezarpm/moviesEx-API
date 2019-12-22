const moongose = require('mongoose');

const app = require('./configs/custom-express');

const port = 3000;

moongose.connect('mongodb://localhost:27017/teste', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen(port, () => {
  console.log(`Server running in the port ${port}`);
});
