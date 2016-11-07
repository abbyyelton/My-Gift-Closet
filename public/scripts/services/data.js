'use strict';

angular.module('giftClosetApp')
.service('dataService', function($http, $q) {
  this.getGifts = function(cb) {
  //  $http.get('/mock/gifts.json').then(cb);
    $http.get('/api/gifts').then(cb);
  };

  this.deleteGift = function(gift) {
    console.log('in delete');
    var request = $http.delete('/api/gifts/' + gift._id, gift);
  };

  this.saveGifts = function(gifts) {
    console.log('in save gifts');
    console.log(gifts);
    var queue = [];
    gifts.forEach(function(gift) {
      var request;
      if (!gift._id) {
        request = $http.post('/api/gifts', gift);
      } else {
        request = $http.put('/api/gifts/' + gift._id, gift)
        .then(function(result) {
          gift = result.data.gift;
          return gift;
        });
      };
      queue.push(request);
    });
    return $q.all(queue).then(function(results) {
      console.log("I saved " + gifts.length + " gifts.");
    });
  };

});
