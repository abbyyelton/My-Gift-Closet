'use strict';

angular.module('giftClosetApp')
.controller('giftCtrl', function($scope, dataService) {
  $scope.deleteGift = function(gift, index) {
    $scope.gifts.splice(index, 1);
    dataService.deleteGift(gift);
  };

  $scope.saveGifts = function() {
    var filteredGifts = $scope.gifts.filter(function(gift){
      if(gift.edited) {
        return gift
      };
    })
    dataService.saveGifts(filteredGifts)
    .finally($scope.resetGiftState());
  };

  $scope.resetGiftState = function() {
    $scope.gifts.forEach( function(gift) {
      gift.edited = false;
    });
  };
});
