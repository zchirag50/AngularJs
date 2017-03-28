module angularWithTS.Interfaces {

    export interface IPlayListservice {
        getPlayList: () => Array<ITrunck>;
    }
    export interface ITrunck {
        title: string;
        artist: string;
        rating: number;
    }
}