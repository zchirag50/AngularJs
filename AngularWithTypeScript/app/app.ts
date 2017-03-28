/// <reference path="../bower_components/dt-angular/angular.d.ts" />
/// <reference path="../bower_components/dt-angular/angular-route.d.ts" />

((): void=> {

    var app = angular.module("angularWithTS", ['ngRoute']);
    app.config(angularWithTS.Routes.configureRoutes);

})()

