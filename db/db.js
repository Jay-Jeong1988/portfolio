const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
  if (err) {
    console.log ('ERROR connecting to mongodb: ' + err);
    } else {
    console.log ('Successfully connected to mongodb');
    }
})

module.exports = mongoose.connection;