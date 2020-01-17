var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Project = require('../db/projectSchema');

router.get('/getOne/:uid', function (req, res, next) {
  Project.findOne({uid: req.params.uid})
    .exec(function (err, items) {
      if (err) return console.error(err);
      res.status(200).json(items);
    })
});

module.exports = router;