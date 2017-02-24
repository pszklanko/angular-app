(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('HobbyController', HobbyController);

  /** @ngInject */
  function HobbyController($state, TabService) {
    var vm = this;

    function initialise() {

    vm.go = function(state) {
      $state.go(state);
    };

    vm.tabData = TabService.tabs;
  }

  initialise();
  }
})();
