var express = require('express');
var router = express.Router();
var Review = require("../db/reviewSchema");
var Trip = require("../db/tripSchema");

router.get('/getAll', function (req, res, next) {
  Review.find()
    .sort({
      createdAt: -1
    })
    .exec(function (err, items) {
      if (err) return console.error(err);
      res.status(200).json(items);
    })
});
router.get('/verifyAuth', function (req, res, next) {
  const customerNameWithoutInitials = req.query.customerNameWithoutInitials;
  const phoneLast4Digits = req.query.phoneLast4Digits;
  Review.findOne({ "customerName": {
    "$regex": customerNameWithoutInitials,
    "$options": "i"
  }, 
    phoneLast4Digits: phoneLast4Digits}, (err, review) => {
    if (err) return console.error(err);
    if (review != null) res.status(200).send("ok")
    else res.status(401).send("wrong input data")
  })
})
router.get('/remove', (req, res) => {
  Review.deleteOne({
    _id: req.query.reviewId
  }, (err, trip) => {
    if (err) return console.error(err);
    res.status(200).send("ok")
  })
})
router.get('/removeAll', (req, res) => {
  Review.deleteMany({}, (err, result) => {
    if (err) return console.error(err);
    res.status(200).send("ok")
  })
})
router.post('/update', (req, res) => {
  const reviewId = req.query.reviewId;
  const content = req.body.content || "내용이 없습니다.";
  const stars = req.body.stars;
  const showAsInitials = req.body.showAsInitials;
  Review.updateOne({
      _id: reviewId
    }, {
      $set: {
        content,
        stars,
        showAsInitials
      }
    })
    .exec((err, data) => {
      if (err) return console.error(err);
      Review.findOne({
        _id: reviewId
      }).populate().exec((err, review) => {
        res.status(200).json(review);
      })
    })
})
router.post('/create', (req, res) => {
  let customerNameWithoutInitials = req.body.customerNameWithoutInitials;
  const phoneLast4Digits = req.body.phoneLast4Digits;
  const content = req.body.content || "내용이 없습니다.";
  const stars = req.body.stars;
  const showAsInitials = req.body.showAsInitials;
  let customerName = "";
  customerNameWithoutInitials = req.body.customerNameWithoutInitials[0].toUpperCase() + customerNameWithoutInitials.slice(1);

  Trip.findOne({
    "customerName": {
      "$regex": customerNameWithoutInitials,
      "$options": "i"
    },
    "phone": {
      "$regex": phoneLast4Digits,
      "$options": "i"
    },
  }, (err, trip) => {
    if (err) return console.error(err);
    if (trip) {
      customerName = trip.customerName;
      Review.findOne({
        "customerName": {
          "$regex": customerNameWithoutInitials,
          "$options": "i"
        },
        "phoneLast4Digits": phoneLast4Digits || "0000"
      }, (err, review) => {
        if (err) return console.error(err);
        if (!review) {
          const newReview = new Review({
            customerName,
            content,
            phoneLast4Digits,
            stars,
            showAsInitials
          });
          newReview.save().then(newReview => {
            res.status(200).json(newReview)
          }).catch(error => {
            console.log(error.message);
            res.status(500).json({
              error: error.message
            })
          })
        } else {
          console.log("duplicated user review")
          res.status(500).json({"error": "이미 후기를 한번 작성 하셨습니다 🙂"})
        }
      })
    }else {
      console.log("not a client")
      res.status(500).json({"error": "입력하신 정보를 다시 확인 해주세요."})
    }
  })
})

module.exports = router;