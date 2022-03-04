angular.module("universidadApp").controller("alumnosCtrl", ["$scope", "$http", function($scope, $http){
    $scope.alumnos = [];

    $http.get('http://localhost:4000/api/alumnos').then(function(response){
        $scope.alumnos = response.data.data;
    });
    
}]);