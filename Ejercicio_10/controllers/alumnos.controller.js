angular.module("universidadApp").controller("alumnosCtrl", ["$scope", "$http", function($scope, $http){
    $scope.alumnos = [];
    $scope.position = 5;

    $http.get('http://localhost:4000/api/alumnos').then(function(response){        
        $scope.alumnos = response.data.data;
    });
    
    $scope.prevPage = function(){ $scope.position = $scope.position - 5; };
    $scope.nextPage = function(){ $scope.position = $scope.position + 5; };

    $scope.hasDisabled = function(direction){
        let condition;

        switch(direction){
            case 'prev': condition = ($scope.position - 5) > 0; break;
            case 'next': condition = ($scope.position + 5) <= $scope.alumnos.length; break;
        };

        return !condition;
    };
}]);

angular.module("universidadApp").controller("alumnosDetailCtrl", ["$scope", "$http", "$routeParams", "$location", function($scope, $http, $routeParams, $location){
    $scope.alumno = {};
    $scope.isNewAlumno = false;

    if($routeParams._id != 'nuevo'){
        $http.get(`http://localhost:4000/api/alumnos/${$routeParams._id}`).then(function(response){
            $scope.alumno = response.data.data;
            if(!$scope.alumno) $location.path('/alumnos');
        }).catch(function(){
    
        });
    }else{
        $scope.isNewAlumno = true;
    };


    $scope.submit = function(a){
        $http.post(`http://localhost:4000/api/alumnos/${$routeParams._id}`, $scope.alumno). then(function(response){
            $location.path('/alumnos');
        });
    }
}]);