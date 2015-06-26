angular.module('EasyWordApp')
    .factory('UnitsDataFactory', ['$http', function($http){
        var dataFactory = {};
        var url = 'http://localhost:3000/api/units/';

        dataFactory.list = function(){
            return $http({
                method: 'GET',
                url: url,
                headers: {'Content-Type': 'application/json; charset=utf-8'}
            });
        };

        dataFactory.get = function(id) {
            return $http.get(urlBase + '/' + id);
        };

        dataFactory.add = function(unit) {
            return $http.post(urlBase, unit);
        };

        dataFactory.delete = function(unit) {
            return $http.delete(urlBase + '/' + unit.id);
        };

        dataFactory.update = function(unit) {
            return $http.put(urlBase + '/' + unit.id, unit);
        };

        return dataFactory;
    }]);