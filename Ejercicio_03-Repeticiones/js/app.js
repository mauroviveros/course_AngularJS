(function(){
    var app = angular.module("universidadApp", []);

    app.controller("listadoCtrl", ["$scope", function($scope){

        $scope.listado = ['Fernando Herrera', 'Melissa Flores', 'Juan Carlos Pineda'];
    }]);
})();