angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: './views/landing.html',
        controller: 'landingCtrl'
      })
    $urlRouterProvider.otherwise('/landing')
  })
