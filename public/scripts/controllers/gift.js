'use strict';

//Controller for the gift list section
angular.module('giftClosetApp')
.controller('giftCtrl', function($scope, $rootScope, dataService) {

  $scope.deleteGift = function(gift, index) {
    $scope.gifts.splice(index, 1);
    dataService.deleteGift(gift);
  };

  $scope.saveGifts = function() {
    //filter out unedited gifts
    var filteredGifts = $scope.gifts.filter(function(gift){
      if(gift.edited) {
        return gift
      };
    });

    dataService.saveGifts(filteredGifts)
      .finally($scope.resetGiftState());
  };
 // make sure all gifts have a false editing status
  $scope.resetGiftState = function() {
    $scope.gifts.forEach( function(gift) {
      gift.edited = false;
    });
  };

  //for saving gift from modal
  $rootScope.$on('saveGifts', function(gifts) {
    $scope.gifts = gifts;
    $scope.saveGifts();
  })

});
