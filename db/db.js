const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:ht1eOdNoWZZvH1j5@cluster0-w13jx.mongodb.net/guibinpingpong?retryWrites=true&w=majority", {
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