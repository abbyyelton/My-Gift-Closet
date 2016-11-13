'use strict';

//Controller for 'Add Gift' link to create the modal
angular.module('giftClosetApp')
.controller('showAddGiftCtrl', function($scope, $rootScope, ModalService, dataService) {

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
        //Add gift when button pushed
        if (gift.title != null) {
          $scope.gifts.push(gift);
          $rootScope.$broadcast('saveGifts(' +$scope.gifts +')');
        }
      });
    });

  };

});
