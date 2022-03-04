var app = angular.module("universidadApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: './views/home.view.html'
    });
    $routeProvider.when('/alumnos', {
        templateUrl: './views/alumnos.view.html'
    });
    $routeProvider.when('/profesores', {
        templateUrl: './views/profesores.view.html'
    });

    // $routeProvider.otherwise({ redirectTo: '/' });
}]);