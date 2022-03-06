angular.module("paginacionApp").controller("mainCtrl", ["$scope", "$log", function($scope, $log){
    $scope.nombre = "Juan Carlos";

    $scope.$watch("nombre", function(newVal, oldVal){
        $log.info(newVal);
        $log.info(oldVal);
    });
}]);