(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('NewsController', NewsController);

  /** @ngInject */
  function NewsController($state, TabService) {
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
