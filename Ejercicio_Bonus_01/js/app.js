(function () {
    var app = angular.module("bonusApp", ["ngTouch"]);
    app.controller("mainCtrl", ["$scope", "$http", function($scope, $http){
        $scope.mostrarCaja = function(){
            alert("mostrar alerta");
        };
    }]);
})();