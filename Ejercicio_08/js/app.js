(function () {
    var app = angular.module("ejemplosApp", []);
    app.controller("mainCtrl", ["$scope", "$http", function($scope, $http){
        $scope.geo = {};

        $http.get('http://www.geoplugin.net/json.gp?jsoncallback').then(function(response){
            $scope.geo = response.data;
        });
    }]);
})();