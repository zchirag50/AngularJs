/// <reference path="../bower_components/dt-angular/angular.d.ts" />
/// <reference path="../bower_components/dt-angular/angular-route.d.ts" />

module angularWithTS {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", {
                controller: "angularWithTS.controllers.tsDemoController",
                templateUrl: "/app/View/playlist.html",
                controllerAs: "playList"
            });
            $routeProvider.otherwise({ redirectTo : "/home"});
        }
    }

}