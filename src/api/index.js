'use strict';

var express = require('express');
var Gift = require('../models/gift');
//var gifts = require('../../mock/gifts.json');

//Set up routes (apis)
var router = express.Router();

router.get('/gifts', function(req, res) {
  Gift.find({}, function(err, gifts) {
    if (err) {
      return res.status(500).json({message: err.message});
    } else {
      res.json({gifts: gifts});
    }
  });
});

// POST route to create new entries
router.post('/gifts', function(req, res) {
  var gift = req.body;
  Gift.create(gift, function(err, gift) {
    if (err) {
      return res.status(500).json({message: err.message});
    } else {
      res.json( {'gift': gift, message: 'Gift Created'});
    }
  })
})

// PUT route to update existing entries
router.put('/gifts/:id', function(req, res) {
  var id = req.params.id;
  var gift = req.body;
  if (gift && gift._id != id) {
    return res.status(500).json({err: "Ids don't match"});
  }
  Gift.findByIdAndUpdate(id, gift, {new: true}, function(err, gift) {
    if (err) {
      return res.status(500).json({message: err.message});
    } else {
      res.json( {'gift': gift, message: 'Gift Updated'});
    }
  })
})

// DELETE route to delete existing entries
router.delete('/gifts/:id', function(req, res) {
  console.log('in 1st delete');
  var id = req.params.id;
  Gift.findByIdAndRemove(id, function(err) {
    if (err) {
      return res.status(500).json({message: err.message});
    } else {
      res.json( {message: 'Gift Deleted'});
    }
  })
})

module.exports = router;
