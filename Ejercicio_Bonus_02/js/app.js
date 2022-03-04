(function () {
    var app = angular.module("bonusApp", []);
    app.controller("mainCtrl", ["$scope", "$http", function($scope, $http){
        $scope.mostrarCaja = function(bool){
            if(bool){
                Swal.fire({
                    icon: 'info',
                    title: 'Alerta',
                    text: 'Texto de Prueba'
                  })
            }else{
                alert("mostrar alerta");
            }
        };
    }]);
})();