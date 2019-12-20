const mongoose = require('mongoose');

const CreateConnection = async () => {
  try {
    const connection = await mongoose.connect('mongodb://localhost/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    return connection;
  } catch (error) {
    return error;
  }
};

module.exports = CreateConnection;
