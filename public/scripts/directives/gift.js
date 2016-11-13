'use strict';

//load gift list
angular.module('giftClosetApp')
.directive('gift', function(){
  return {
    templateUrl: 'templates/gift.html',
    replace: true,
    controller: 'giftCtrl'
  }
});
