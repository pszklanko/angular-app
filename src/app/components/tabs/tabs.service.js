(function() {
  'use strict';

  angular
    .module('angularApp')
    .service('TabsService', TabsService);

  /** @ngInject */
  function TabsService() {
    var _tabs = [
      {
        heading: '<i>Home</i>',
        route: 'home'
      },
      {
        heading: '<i>About</i>',
        route: 'about'
      },
      {
        heading: '<i>Contact</i>',
        route: 'contact'
      },
      {
        heading: '<i>News</i>',
        route: 'news'
      },
      {
        heading: '<i>Hobby</i>',
        route: 'hobby'
      }
    ]

    this.getTabs = function() {
      return _tabs;
    }
  }
})();
