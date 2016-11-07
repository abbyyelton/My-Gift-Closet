'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-gift-closet', function(err) {
  if (err) {
    console.log('Failed to connect to Mongodb');
  } else {
    console.log('Connected to Mongodb');
  }

});
