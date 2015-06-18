'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('EasyWordApp', [
  'ngRoute',
  'EasyWordApp.Words'
]);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      otherwise({redirectTo: '/'});
}]);