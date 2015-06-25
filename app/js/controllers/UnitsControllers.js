angular.module('EasyWordApp').controller('UnitsController', function($scope){
    $scope.title = "Units";

    $scope.units = [{id: 0, title: "Unit 1", description: ""},
                    {id: 1, title: "Unit 2", description: ""},
                    {id: 2, title: "Unit 3", description: ""}];
});

angular.module('EasyWordApp').controller('AddUnitController', function($scope){
    $scope.message = '';
    $scope.latestId = 2;
    $scope.newUnit = {};

    $scope.addUnit = function(unit) {
        $scope.message = 'Thanks, ' + $scope.unit.title + ', we added you!';
    };

    $scope.reset = function() {
        $scope.newUnit = {};
    };
});