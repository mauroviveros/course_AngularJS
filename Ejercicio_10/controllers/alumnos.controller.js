angular.module("universidadApp").controller("alumnosCtrl", ["$scope", "$http", function($scope, $http){
    $scope.alumnos = [];
    $scope.position = 5;

    $http.get('http://localhost:4000/api/alumnos').then(function(response){
        $scope.alumnos = response.data.data;
    });
    
    $scope.prevPage = function(){ $scope.position = $scope.position - 5; };
    $scope.nextPage = function(){
        console.log("asdsad");
        $scope.position = $scope.position + 5;
    };

    $scope.hasDisabled = function(direction){
        let condition;

        switch(direction){
            case 'prev': condition = ($scope.position - 5) > 0; break;
            case 'next': condition = ($scope.position + 5) <= $scope.alumnos.length; break;
        };

        return !condition;
    };
}]);