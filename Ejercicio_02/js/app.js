var app = angular.module("universidadApp", []);

app.controller("profesorCtrl", ["$scope", function($scope){
    $scope.profesor = {
        nombre: "Juan Carlos Pineda",
        bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
        edad: 47,
        foto: "img/juancarlos.jpg"
    };
    $scope._profesor = {};
    $scope.mostrarCaja = false;

    $scope.editarProfesor = function(){
        $scope._profesor = angular.copy($scope.profesor);
        $scope.mostrarCaja = true;
    };

    $scope.guardarProfesor = function(){
        $scope.profesor = angular.copy($scope._profesor);
        $scope._profesor = {};
        $scope.mostrarCaja = false;
    };

    $scope.cancelarProfesor = function(){
        $scope._profesor = {};
        $scope.mostrarCaja = false;
    };
}]);