/// <reference path="../../bower_components/dt-angular/angular.d.ts" />
/// <reference path="../../bower_components/dt-angular/angular-route.d.ts" />

module angularWithTS.controllers {
    export class TSDemoController {
        playListService: angularWithTS.Interfaces.IPlayListservice;
        static $inject = ["angularWithTS.service.PlayListService"];
        myVar: string="chi";
        constructor(playListService: angularWithTS.Interfaces.IPlayListservice) {
            this.myVar = "chirag";
            this.playListService = playListService;
        }
        favorites: Array<angularWithTS.Interfaces.ITrunck>;
        getFavourites = () => {
            this.favorites = this.playListService.getPlayList();
        }
    }
    angular.module("angularWithTS").controller("angularWithTS.controllers.tsDemoController", TSDemoController);

}