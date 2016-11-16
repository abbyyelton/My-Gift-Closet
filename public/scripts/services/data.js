'use strict';

//Database operations
angular.module('giftClosetApp')
.service('dataService', function($http, $q) {
  this.getGifts = function(cb) {
    $http.get('/api/gifts').then(cb);
  };

  this.deleteGift = function(gift) {
    var request = $http.delete('/api/gifts/' + gift._id, gift);
  };

  this.saveGifts = function(gifts) {
    var queue = [];
    gifts.forEach(function(gift) {
      var request;
      //check to see if gift already exists in database
      if (!gift._id) {
        request = $http.post('/api/gifts', gift);
      } else {
        //if exists, fetch record and update
        request = $http.put('/api/gifts/' + gift._id, gift)
        .then(function(result) {
          gift = result.data.gift;
          return gift;
        });
      };
      queue.push(request);
    });
    return $q.all(queue).then(function(results) {
      //make sure new _id is assigned to $gifts
       if (gifts[gifts.length-1]._id === undefined ) {
         gifts[gifts.length-1]._id = results[0].data.gift._id;
       }
    });
}});
