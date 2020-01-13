var express = require('express');
var router = express.Router();
var Reservation = require("../db/reservationSchema");

router.get('/getAll', function (req, res, next) {
  Reservation.find()
    .sort({
      createdAt: -1
    })
    .exec(function (err, items) {
      if (err) return console.error(err);
      res.status(200).json(items);
    })
});

router.get('/updateCrossed', (req, res) => {
  Reservation.updateOne({
      _id: req.query.reservationId
    }, {
      $set: {
        crossed: req.query.crossed
      }
    })
    .exec((err, data) => {
      if (err) return console.error(err);
      res.status(200).json({"ok": 200})
    })
})

router.post('/update', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const note = req.body.note;

  Reservation.updateOne({
      _id: req.query.reservationId
    }, {
      $set: {
        name,
        phone,
        note
      }
    })
    .exec((err, data) => {
      if (err) return console.error(err);
      Reservation.findOne({
        _id: req.query.reservationId
      }).populate().exec((err, reservation) => {
        res.status(200).json(reservation);
      })
    })
})

router.get('/remove', (req, res) => {
  Reservation.deleteOne({
    _id: req.query.reservationId
  }, (err, reservation) => {
    if (err) return console.error(err);
    res.status(200).send("ok")
  })
})
router.get('/removeAll', (req, res) => {
  Reservation.deleteMany({}, (err, result) => {
    if (err) return console.error(err);
    res.status(200).send("ok")
  })
})

router.post('/create', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const note = req.body.note;

  const newReservation = new Reservation({
    name,
    phone,
    note
  });
  newReservation.save().then(newReservation => {
    res.status(200).json({"ok": "successfully created a reservation"});
  }).catch(error => {
    console.log(error.message);
    res.status(500).json({
      error: error.message.split(":").slice(1).join(":")
    })
  })
})

module.exports = router;
