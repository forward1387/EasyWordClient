'use strict';

angular.module('EasyWordApp.Words', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/words', {
            templateUrl: 'templates/words.templ.html',
            controller: 'WordsCtrl'
        });
    }])

    .controller('WordsCtrl', [function() {

    }]);