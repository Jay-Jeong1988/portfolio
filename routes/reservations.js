var express = require('express');
var router = express.Router();
var Reservation = require("../db/reservationSchema");

router.get('/getAll', function (req, res, next) {
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth();
  const d = today.getDate();
  const h = 7; //to convert to korean timezone
  Reservation.find({
    dateAndTime: {"$gte": new Date(y, m, d, h), "$lt": new Date(y, m, d+1, h)}
  }).limit(200)
    .sort({
      dateAndTime: 1
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
      // Reservation.findOne({
      //   _id: req.query.reservationId
      // }).select("crossed").exec((err, status) => {
      //   res.status(200).json(status);
      // })
    })
})

router.post('/update', (req, res) => {
  const customerName = req.body.customerName || "귀빈탁구클럽";
  const dateAndTime = req.body.dateAndTime;
  const duration = req.body.duration;
  const phone = req.body.phone;
  const numberOfPeople = req.body.numberOfPeople;

  Reservation.updateOne({
      _id: req.query.reservationId
    }, {
      $set: {
        customerName,
        dateAndTime,
        duration,
        phone,
        numberOfPeople
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
  const customerName = req.body.customerName;
  const dateAndTime = req.body.dateAndTime;
  const duration = req.body.duration || "미정";
  const phone = req.body.phone;
  const numberOfPeople = req.body.numberOfPeople;
  const note = req.body.note;

  const newReservation = new Reservation({
    customerName,
    dateAndTime,
    duration,
    phone,
    numberOfPeople,
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

  function randomThumbnailUrl() {
    return `https://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,ar-6-4,w-600e-usm-2-2-0.8-0.024/table_tennis_${Math.floor(Math.random() * 15)}.jpg`
  }
})

module.exports = router;