var app = angular.module("promesaApp", []);


app.controller("mainCtrl", ["$scope", "$timeout", "$log", "$q", function($scope, $timeout, $log, $q){
    $scope.numero = 0;
    

    $scope.sumarSync = function(num){
        const defered = $q.defer();

        
        $timeout(function(){
            let valido = true;
            if(valido) defered.resolve(num + 1);
            else defered.reject("no se sumar");
        }, 3000);

        return defered.promise;
    };

    $scope.sumar = function(){
        $log.info("Sumar");
        $scope.sumarSync($scope.numero).then(function(result){
            $scope.numero = result;
        });
    };
}]);