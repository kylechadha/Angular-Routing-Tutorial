var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function($routeProvider) {
  $routeProvider
    .when('/view1',
      {
        controller: 'SimpleController',
        templateUrl: 'Partials/View1.html'
      })
    .when('/view2',
      {
        controller: 'SimpleController',
        templateUrl: 'Partials/View2.html'
      })
    .otherwise({redirectTo: '/view1'});
});

demoApp.controller('SimpleController', function($scope) {
  $scope.customers = [
    { name: 'Dave Jones', city: 'Phoenix' },
    { name: 'Jamie Riley', city: 'Phoenix' },
    { name: 'Heedy Wahlin', city: 'Chandler' },
    { name: 'Thomas Winter', city: 'Seattle' }
  ];
  $scope.addCustomer = function() {
    $scope.customers.push(
      {
        name: $scope.Customer.name,
        city: $scope.Customer.city
      });
  };
});