(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($state, TabService) {
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
