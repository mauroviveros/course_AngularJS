(function(){
    var app = angular.module("universidadApp", []);

    app.controller("listadoCtrl", ["$scope", function($scope){

        $scope.listado = ['Fernando Herrera', 'Melissa Flores', 'Juan Carlos Pineda'];
        $scope.listadoProfesores = [
            {
                nombre: 'Fernando Herrera',
                edad: 29,
                clase: "PEE"
            },
            {
                nombre: 'Melissa Flores',
                edad: 24,
                clase: 'ICE'
            },
            {
                nombre: 'Juan Carlos Pineda',
                edad: 42,
                clase: 'M110'
            }
        ];
        $scope.numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }]);
})();