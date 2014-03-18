var demoApp = angular.module('demoApp', []);

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

demoApp.config(function ($routeProvider) {
  $routeProvider
    .when('/view1',
      {
        controller: 'SimpleController',
        templateURL: 'partials/view1.html'
      })
    .when('/view2',
      {
        controller: 'SimpleController',
        templateURL: 'partials/view2.html'
      })
    .otherwise({redirectTo: '/view1'});
});