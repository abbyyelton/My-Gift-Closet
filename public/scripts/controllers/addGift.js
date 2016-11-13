'use strict';

//Controller for the 'Add' button on the 'Add Gift' Modal
angular.module('giftClosetApp')
.controller('addGiftCtrl', [
  '$scope', '$element', 'header', 'close',
  function($scope, $element, header, close) {

  $scope.close = function() {
 	  close({
      title: $scope.title,
      storeLink: $scope.storeLink,
      recipient: $scope.recipient,
      holiday: $scope.holiday,
      price: $scope.price,
      purchased: $scope.purchased,
      wrapped: $scope.wrapped,
      edited: true
    }, 500);
  };

  $scope.cancel = function() {
    //  Manually hide the modal.
    $element.modal('hide');
  };

}]);
