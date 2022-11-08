const mongoose = require('mongoose');


// Connection to MongoDB cloud backend


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/spotlight',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
