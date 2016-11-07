'use strict';

var mongoose = require('mongoose');

var giftSchema = new mongoose.Schema({
  title: String,
  price: String,
  storeLink: String,
  recipient: String,
  holiday: String,
  notes: String,
  purchased: Boolean,
  wrapped: Boolean
});

var model = mongoose.model('Gift', giftSchema);

module.exports = model;
