spaceApp.config(function($routeProvider){
        $routeProvider.when('/LoginScreen',
        {
            templateUrl:'Pages/LoginScreen.html',
            controller:'LoginScreenController'
        });
        $routeProvider.when('/SelectPlace',
        {
            templateUrl:'Pages/SelectPlaceScreen.html',
            controller:'SelectPlaceController'
        });
        $routeProvider.when('/HomeScreen',
        {
            templateUrl:'Pages/HomeScreen.html',
            controller:'HomeScreenController'
        });
        $routeProvider.otherwise({redirectTo: '/LoginScreen'});
});