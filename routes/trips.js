var express = require('express');
var router = express.Router();
var Trip = require("../db/schema");

router.get('/getAll', function (req, res, next) {
  Trip.find(function (err, items) {
    if (err) return console.error(err);
    res.status(200).json(items);
  })
});

router.get('/updateStatus', (req, res) => {
  Trip.findOneAndUpdate({
      _id: req.query.tripId
    }, {
      $set: {
        status: req.query.status
      }
    })
    .select("status")
    .exec((err, data) => {
      if (err) return console.error(err);
      res.status(200).json(data);
    })
})
router.get('/remove', (req, res)=>{
  Trip.deleteOne({_id: req.query.tripId}, (err, trip) => {
    if (err) return console.error(err);
    res.status(200).send("ok")
  })
})

router.get('/create', (req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  const pickupTime = req.query.pickupTime;
  const eta = req.query.eta;

  const newTrip = new Trip({
    from: from[0].toUpperCase() + from.slice(1),
    to: to[0].toUpperCase() + to.slice(1),
    pickupTime,
    eta,
    thumbnailUrl: randomThumbnailUrl(),
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
    return `https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-600e-usm-2-2-0.8-0.024/vancouver-${Math.floor(Math.random() * 13)+1}.jpg`
  }
})

module.exports = router;