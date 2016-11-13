'use strict';

angular.module('giftClosetApp')
.controller('showAddGiftCtrl', function($scope, ModalService, dataService) {

  $scope.title = null;
  $scope.price = null;
  $scope.storeLink = null;
  $scope.recipient = null;
  $scope.holiday = null;
  $scope.purchased = false;
  $scope.wrapped = false;

  $scope.showAddGift = function() {

    ModalService.showModal({
      templateUrl: "templates/addGift.html",
      controller: "addGiftCtrl",
      inputs: {
        header: "Add a gift"
      }
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(gift) {
        if (gift.title != null) {
          var array = [];
          array.push(gift);
          dataService.saveGifts(array);
        }
      });
    });

  };

});
