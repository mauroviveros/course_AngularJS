app.controller("mainCtrl", ["$location", "$scope", function($location, $scope){
    $scope.template = {
        navbar: './partials/navbar.partial.html'
    };

    $scope.navbarMenu = [
        {
            nombre: 'Inicio',
            url: '#!/',
            active: false
        },
        {
            nombre: 'Alumnos',
            url: '#!/alumnos',
            active: false
        },
        {
            nombre: 'Profesores',
            url: '#!/profesores',
            active: false
        }
    ]

    $scope.$on('$locationChangeSuccess', function(){
        $scope.navbarMenu = $scope.navbarMenu.map(function(page){
            page.active = $location.path() == page.url.replace('#!', '');

            return page;
        });
    });
}]);