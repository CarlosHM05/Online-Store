var app = angular.module("myApp",[]);
app.controller("home",home);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
    .state("home",{
        url:"/",
        templateUrl: "ngApp/views/home.html",
        controller:home,
        controllerAs:"vm"
    })
});