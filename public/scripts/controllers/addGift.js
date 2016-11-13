'use strict';

angular.module('giftClosetApp')
.controller('addGiftCtrl', [
  '$scope', '$element', 'header', 'close',
  function($scope, $element, header, close) {
  $scope.price = null;
  $scope.storeLink = null;
  $scope.title = null;

  //  This close function doesn't need to use jQuery or bootstrap, because
  //  the button has the 'data-dismiss' attribute.
  $scope.close = function() {
 	  close({
      title: $scope.title,
      storeLink: $scope.storeLink,
      recipient: $scope.recipient,
      holiday: $scope.holiday,
      price: $scope.price,
      purchased: $scope.purchased,
      wrapped: $scope.wrapped,
      edited: false
    }, 500); // close, but give 500ms for bootstrap to animate
  };

  //  This cancel function must use the bootstrap, 'modal' function because
  //  the doesn't have the 'data-dismiss' attribute.
  $scope.cancel = function() {
    //  Manually hide the modal.
    $element.modal('hide');
  };

}]);
