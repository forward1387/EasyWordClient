'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('EasyWordApp', [
  'ngRoute'
]);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/home', {templateUrl: 'templates/home.templ.html'}).
      when('/login', {templateUrl: 'templates/login.templ.html'}).
      when('/words', {}).
      otherwise({redirectTo: '/home'});
}]);