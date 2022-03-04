var app = angular.module("universidadApp", ["ngRoute", "ui.mask"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: './views/home.view.html'
    });
    $routeProvider.when('/alumnos', {
        templateUrl: './views/alumnos.view.html',
        controller: 'alumnosCtrl'
    });
    $routeProvider.when('/alumnos/:_id', {
        templateUrl: './views/alumnos.detail.view.html',
        controller: 'alumnosDetailCtrl'
    });
    $routeProvider.when('/profesores', {
        templateUrl: './views/profesores.view.html'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
}]);

app.filter("telefono", [function(){
    return function(number){
        number = number || '';
        return `${number.substring(0, 4)}-${number.substring(4)}`
    }
}]);