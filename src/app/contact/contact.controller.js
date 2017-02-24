(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController($state, TabService) {
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
