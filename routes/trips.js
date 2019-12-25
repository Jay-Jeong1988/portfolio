var express = require('express');
var router = express.Router();
var Trip = require("../db/schema");

router.get('/getAll', function (req, res, next) {
  Trip.find().limit(25)
    .sort({
      pickupTime: -1
    })
    .exec(function (err, items) {
      if (err) return console.error(err);
      res.status(200).json(items);
    })
});

router.get('/updateStatus', (req, res) => {
  Trip.updateOne({
      _id: req.query.tripId
    }, {
      $set: {
        status: req.query.status
      }
    })
    .exec((err, data) => {
      if (err) return console.error(err);
      Trip.findOne({
        _id: req.query.tripId
      }).select("status").exec((err, status) => {
        res.status(200).json(status);
      })
    })
})

router.post('/update', (req, res) => {
  const pickupTime = req.body.pickupTime;
  const duration = req.body.duration;
  const customerName = req.body.customerName || "JJ Ride";
  const pickupAddress = req.body.pickupAddress
  const destinationAddress = req.body.destinationAddress
  const phone = req.body.phone;
  const distance = req.body.distance;
  const price = req.body.price;
  Trip.updateOne({
      _id: req.query.tripId
    }, {
      $set: {
        pickupTime,
        duration,
        customerName,
        pickupAddress,
        destinationAddress,
        phone,
        distance,
        price
      }
    })
    .exec((err, data) => {
      if (err) return console.error(err);
      Trip.findOne({
        _id: req.query.tripId
      }).populate().exec((err, trip) => {
        res.status(200).json(trip);
      })
    })
})

router.get('/remove', (req, res) => {
  Trip.deleteOne({
    _id: req.query.tripId
  }, (err, trip) => {
    if (err) return console.error(err);
    res.status(200).send("ok")
  })
})
router.get('/removeAll', (req, res) => {
  Trip.deleteMany({}, (err, result) => {
    if (err) return console.error(err);
    res.status(200).send("ok")
  })
})

router.post('/create', (req, res) => {
  const from = req.body.from;
  const to = req.body.to;
  const pickupTime = req.body.pickupTime;
  const duration = req.body.duration;
  const customerName = req.body.customerName || "JJ Ride";
  const pickupAddress = req.body.pickupAddress;
  const destinationAddress = req.body.destinationAddress;
  const phone = req.body.phone;
  const distance = req.body.distance;
  const price = req.body.price;

  const newTrip = new Trip({
    from: from[0].toUpperCase() + from.slice(1),
    to: to[0].toUpperCase() + to.slice(1),
    pickupTime,
    duration,
    thumbnailUrl: randomThumbnailUrl(),
    customerName: customerName[0].toUpperCase() + customerName.slice(1),
    pickupAddress,
    destinationAddress,
    phone,
    distance,
    price
  });

  newTrip.save().then(newTrip => {
    console.log("successfully created a trip");
    res.status(200).json(newTrip);
  }).catch(error => {
    console.log(error.message);
    res.status(500).json({
      error: error.message
    })
  })

  function randomThumbnailUrl() {
    return `https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-600e-usm-2-2-0.8-0.024/vancouver_${Math.floor(Math.random() * 13)+1}.jpg`
  }
})

module.exports = router;