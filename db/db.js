const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://jay:WIohGW33pBIhyKWU@survivalstack-ceh5l.mongodb.net/pockercases?retryWrites=true&w=majority", {
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