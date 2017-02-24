(function() {
  'use strict';

  angular
    .module('angularApp')
    .directive('mainNavbar', mainNavbar);

  /** @ngInject */
  function mainNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/main-navbar/main-navbar.html',
      controller: MainNavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MainNavbarController($state, TabsService) {
      var vm = this;

      function initialise() {

      vm.go = function(state) {
        $state.go(state);
      };

      vm.tabData = TabsService.tabs;
    }

    initialise();
    }
  }

})();
