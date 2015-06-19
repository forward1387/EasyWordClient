'use strict';

// Declare app level module which depends on views, and components
angular.module('EasyWordApp', [
  'ngRoute'
]).config(['g', function($routeProvider) {
  $routeProvider.
      when('/words', {}).
      otherwise({redirectTo: '/home'});
}]);