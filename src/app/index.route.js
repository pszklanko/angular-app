(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      }).state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      }).state('news', {
        url: '/news',
        templateUrl: 'app/news/news.html',
        controller: 'NewsController',
        controllerAs: 'news'
      }).state('hobby', {
        url: '/hobby',
        templateUrl: 'app/hobby/hobby.html',
        controller: 'HobbyController',
        controllerAs: 'hobby'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
