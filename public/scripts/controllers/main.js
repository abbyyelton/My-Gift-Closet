'use strict';

//require()

angular.module('giftClosetApp')
.controller('mainCtrl', function($scope, dataService){

  dataService.getGifts(function(response){
    var gifts = response.data.gifts;
    $scope.gifts =  gifts;
    });

});
