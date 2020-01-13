const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:fUmQCs2n7AMz69UR@portfolio-11bnz.mongodb.net/test?retryWrites=true&w=majority", {
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