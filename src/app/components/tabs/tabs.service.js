(function() {
  'use strict';

  angular
    .module('angularApp')
    .service('TabService', TabService);

  /** @ngInject */
  function TabService() {
    this.tabs = [
      {
        heading: '<i>Home</i>',
        route: 'home'
        //templateUrl: 'app/main/main.html'
      },
      {
        heading: '<i>About</i>',
        route: 'about'
        //templateUrl: 'app/about/about.html'
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
  }
})();
