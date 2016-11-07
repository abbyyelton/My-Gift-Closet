'use strict';

//require()

angular.module('giftClosetApp')
.controller('mainCtrl', function($scope, dataService){

  dataService.getGifts(function(response){
    var gifts = response.data.gifts;
    $scope.gifts =  gifts;
    });

  $scope.addGift = function() {

    //modal here

    // $scope.gifts.unshift({title: "This is a new gift.",
    //                   holiday: "Christmas",
    //                   purchased: true});
  };

})
