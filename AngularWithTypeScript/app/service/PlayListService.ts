/// <reference path="../interface/iplaylist.ts" />

module angularWithTS.service {
    export class PlayListService implements angularWithTS.Interfaces.IPlayListservice {

        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }
        getPlayList= () => {

            var res: Array<angularWithTS.Interfaces.ITrunck> = [
                { title: "Numb", artist: "Linkin Park", rating: 5 },
                { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                { title: "Yellow", artist: "coldplay", rating: 4.5 },
                { title: "Skyfall", artist: "Adele", rating: 4.5 }
            ];
            return res;
        }
    }
    angular.module("angularWithTS").service("angularWithTS.service.PlayListService", PlayListService);
}