var app = angular.module('youtube', []);

app.controller('LastVideosControllers', function () {
    this.tab = 1 ;
    this.selectTab = function (tab) {
        this.tab = tab;
    };
    this.videos = [{
        image: "https://docs.angularjs.org/img/angularjs-for-header-only.svg",
        title: 'hello 1',
        e: true,
        isF : true,
        views: 1000000000,
        descript: "lorewegm lorem ipsum"
    },{
        image: "https://docs.angularjs.org/img/angularjs-for-header-only.svg",
        title: 'he 2',
        views: 13534660,
        e: false,
        isF : false,
        descript: "lorgregem lorem ipsum"
    },{
        image: "https://docs.angularjs.org/img/angularjs-for-header-only.svg",
        title: 'hel 3',
        views: 103657700,
        e: true,
        isF : false,
        descript: "lorfewem lorem ipsum"
    }];
    this.favorites = [{
        image: "https://docs.angularjs.org/img/angularjs-for-header-only.svg",
        title: 'he444',
        views: 13534660,
        e: false,
        isF : true,
        descript: "lorgregem lorem ipsum"
    }]

});