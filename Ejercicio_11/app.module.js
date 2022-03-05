var app = angular.module("bonusApp", []);


app.controller("mainCtrl", ["$scope", "$log", function($scope, $log){
    $scope.formData = {};

    $scope.guardar_datos = function(form){
        if(!form.$valid) return;

        $log.info("Posteando...");
    };
}]);