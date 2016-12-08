var app = angular.module('youtube', ['ui.bootstrap']);


app.controller('VideosController', function ($scope, API) {
   /* this.tab = 1 ;
    this.selectTab = function (tab) {
        this.tab = tab;
    };*/
    API.getMostPopularVideos().then(function (videos) {
        $scope.videos = videos;
    });
    $scope.videos = [ ];
    $scope.favorites = [{
        image: "https://i.ytimg.com/vi/DyCzLYd17ZI/hqdefault.jpg",
        title: '10 Disney Movie Scenes That Mean More Than You Think!"',
        channelTitle: 'Screen Rant',
        views: 46093,
        e: false,
        isF : true,
        descript: "Real Meanings of Popular Disney Movie Scenes\nSubscribe to our channel : http://goo.gl/ho3Hg6 \n\nCheck Out These Other Amazing Videos:\n\n10 Popular Movie Characters Who Are Barely In The Movie!\nhttps://youtu.be/1A4yQ0E6K2g\n\n10 Impressive Easter Eggs You Missed In Your Favorite Movies!\nhttps://youtu.be/nAmHGCd3Ws8\n\nFor over 90 years, Disney films have entertained and thrilled us. They’ve dazzled our eyes, captured our imaginations, and "
    }];

    $scope.searchSettings = {
        query: null,
        regions: 'US'
    };

    $scope.regions = [{
        title: 'Рос',
        value: 'RU'
    }, {
        title: 'USA',
        value: 'US'
    }];


    $scope.searchVideos = function () {
        API.SearchVideos($scope.searchSettings).then(function (videos) {
            console.log(videos);
            $scope.searched = videos;
        });
    };
    $scope.searched = [];
});

app.directive('videoItem', function () {
    return {
        restrict: 'E',
        templateUrl: 'video-item.html'
    }
});

app.service('API', function ($http, $q) {
   return {
       getMostPopularVideos: function () {
           var key = 'AIzaSyDnHWkrm1UcqjHXw87mfHhZhXIgax7F-Fk';
           var d = $q.defer();
           $http({
               method: 'GET',
               url: 'https://www.googleapis.com/youtube/v3/videos',
               params: {
                   part: 'snippet',
                   maxResults: 50 ,
                   key : key,
                   chart: 'mostPopular'
               }
           }).then(function (data) {
               var y_videos = data.data.items;

               var my_videos = y_videos.map(function (video , index) {
                   return {
                       id : video.id,
                       title: video.snippet.title,
                       descript: video.snippet.description,
                       image: video.snippet.thumbnails.high.url,
                   }
               });
               d.resolve(my_videos);
           });
           return d.promise;

       }, SearchVideos: function (params) {
           var key = 'AIzaSyDnHWkrm1UcqjHXw87mfHhZhXIgax7F-Fk';
           var d = $q.defer();
           $http({
               method: 'GET',
               url: 'https://www.googleapis.com/youtube/v3/search',
               params: {
                   part: 'snippet',
                   maxResults: 13 ,
                   key : key,
                   q: params.query,
                   regionCode: params.regions
               }
           }).then(function (data) {
               var y_videos = data.data.items;

               var my_videos = y_videos.map(function (video , index) {
                   return {
                       id : video.id,
                       title: video.snippet.title,
                       descript: video.snippet.description,
                       image: video.snippet.thumbnails.high.url,


                   }
               });

               d.resolve(my_videos);
           });

           return d.promise;

       }
   }
});