(function () {
    var app = angular.module("ejemplosApp", []);
    app.controller("mainCtrl", ["$scope", "$http", function($scope, $http){
        $scope.profesores = [];
		$scope.template = {
			profesoresTable: './partials/table-profesores.html'
		};

        $http.get('./json/profesores.json').then(function(response){
            $scope.profesores = response.data.profesores;
        });
    }]);
})();
