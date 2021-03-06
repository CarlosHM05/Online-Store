var app = angular.module("myApp",["ui.router"]);
app.controller("Home",Home);
app.controller("About",About);
app.controller("Login",Login);
app.config(function($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
    .state("Home",{
        url:"/",
        templateUrl: "ngApp/views/home.html",
        controller:Home,
        controllerAs:"vm"
    })
    .state("About", {
        url:"/about/:id",
        templateUrl:"ngApp/views/about.html",
        controller:About,
        controllerAs:"vm"
    })
        .state("Login", {
        url:"/login",
        templateUrl:"ngApp/views/login.html",
        controller:Login,
        controllerAs:"vm"
    });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
});
