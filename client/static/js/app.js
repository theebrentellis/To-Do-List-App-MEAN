var To_Do_List = angular.module("To_Do_List", ["ngRoute", "ngMessages", "ListController", "ItemFactory"]);

To_Do_List.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: '/client/index.html'
    })
    .otherwise({
        redirectTo: "/"

    });
});