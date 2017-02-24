(function() {
  'use strict';

  angular
    .module('angularApp')
    .directive('mainNavbar', mainNavbar);

  /** @ngInject */
  function mainNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($state, TabService) {
      var vm = this;

      function initialise() {

      vm.go = function(state) {
        $state.go(state);
      };

      vm.tabData = TabService.tabs;
    }

    initialise();
    }
  }

})();
