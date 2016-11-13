'use strict';

//main controller of app
angular.module('giftClosetApp')
.controller('mainCtrl', function($scope, dataService){

  //load all gifts from database
  dataService.getGifts(function(response){
    var gifts = response.data.gifts;
    $scope.gifts =  gifts;
    });
});
