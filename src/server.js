const app = require('./configs/custom-express');
const createConnection = require('./configs/createConnection');

const port = 3000;

app.listen(port, () => {
  console.log(`Server running in the port ${port}`);
});

createConnection();
