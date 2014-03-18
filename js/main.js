var demoApp = angular.module('demoApp', []);

demoApp.controller('SimpleController', function($scope) {
  $scope.customers = [
    { name: 'Dave Jones', city: 'Phoenix' },
    { name: 'Jamie Riley', city: 'Phoenix' },
    { name: 'Heedy Wahlin', city: 'Chandler' },
    { name: 'Thomas Winter', city: 'Seattle' }
  ];
});

demoApp.config(function ($routeProvider) {
  $routeProvider
    .when('/'. {
      controller: 'SimpleController',
      templateURL: 'Partials/View1.html'
    })
    .when('/partial2', {
      controller: 'SimpleController',
      templateURL: 'Partials/View2.html'
    })
    .otherwise({redirectTo: '/'});
});