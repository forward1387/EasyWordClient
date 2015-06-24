angular.module('EasyWordApp').controller('UnitsController', function($scope){
    $scope.title = "Units";

    $scope.units = [{id: 0, title: "Unit 1", description: ""},
                    {id: 1, title: "Unit 2", description: ""},
                    {id: 2, title: "Unit 3", description: ""}];
    $scope.newUnit = {};

    $scope.latestId = 2;

    $scope.addUnit = function(unit) {
        $scope.latestId +=1;
        unit['id'] = $scope.latestId;
        $scope.units.push(unit);
        $scope.reset();
    };

    $scope.reset = function() {
        $scope.newUnit = {};
    };


});