var app = angular.module('youtube', []);

app.controller('LastVideosControllers', function () {
    this.tab = 1 ;
    this.selectTab = function (tab) {
        this.tab = tab;
    };
    this.videos = [{
        title: 'Holiday Ninjas!',
        channelTitle: 'nigahiga',
        image: "https://i.ytimg.com/vi/TU4JpTCa0QQ/hqdefault.jpg",
        e: true,
        isF : true,
        views: 11629788,
        descript: "Bringing our holiday tradition back with Holiday Ninjas where we go around terrorizing the homeless. #BeSelfish↵See Bloopers and BTS here: https://www.youtube.com/watch?v=wh_fi91xu90&feature=youtu.be↵↵Just Launched New Official Store↵https://www.gianthugs.com/co"
    },{
        title: 'iPhone 7 vs Worlds Strongest Acid - What Will Happen?',
        image: "https://i.ytimg.com/vi/N3xyICmQHy8/hqdefault.jpg",
        channelTitle: 'TechRax',
        views: 5272251,
        e: true,
        isF : true,
        descript: "How does Fluoroantimonic Acid react to an iPhone 7? I decided to find the answer! ↵↵FACEBOOK:↵https://www.facebook.com/techrax↵TWITTER:↵https://twitter.com/techrax ↵INSTAGRAM: ↵http://instagram.com/techrax↵↵Music: Anikdote - Imma Killa [NCS Release]"
    },{
        title: 'Whats inside a Furby Connect?',
        channelTitle: 'Whats Inside?',
        image: "https://i.ytimg.com/vi/pA106XCO8hQ/hqdefault.jpg",
        views: 675198,
        e: true,
        isF : true,
        descript: "We CUT IN HALF a 2016 Furby Connect and a 1996 Furby to see what's inside. These are very advanced smart toys that may creep some people out. \n\nBuy your own Furby Connect here: http://amzn.to/2gqpxik\n\nWe post a new video EVERY WEEK, so, if you liked this video and want more like this then SUBSCRIBE and COMMENT on what you want to see next!\n\nSand Dollar Symbolism: https://www.reference.com/world-view/spiritual-meaning-sand-dollars-ac79cee168384917\n\nFollow us on Twitter: https://twitter.com/whatsinside\nFollow us on Instagram: https://www.instagram.com/whatsinside/\nLike us on Facebook: https://www.facebook.com/whatsinsidethings\n\nFilmed in 4k on this camera: http://amzn.to/1UnXI82\n\nWHATS INSIDE\nPO BOX 750\nKaysville, UT 84037\n\nWARNING: We do not recommend you try what we do! Only do things the we do in our videos IF you are assisted by a qualified adult under proper safety measures. Always think ahead, and remember that any project you try is at YOUR OWN RISK. Remember our motto \"We cut things open so you don't have to.\" so we do not recommend you try anything we do"
    }];
    this.favorites = [{
        image: "https://i.ytimg.com/vi/DyCzLYd17ZI/hqdefault.jpg",
        title: '10 Disney Movie Scenes That Mean More Than You Think!"',
        channelTitle: 'Screen Rant',
        views: 46093,
        e: false,
        isF : true,
        descript: "Real Meanings of Popular Disney Movie Scenes\nSubscribe to our channel : http://goo.gl/ho3Hg6 \n\nCheck Out These Other Amazing Videos:\n\n10 Popular Movie Characters Who Are Barely In The Movie!\nhttps://youtu.be/1A4yQ0E6K2g\n\n10 Impressive Easter Eggs You Missed In Your Favorite Movies!\nhttps://youtu.be/nAmHGCd3Ws8\n\nFor over 90 years, Disney films have entertained and thrilled us. They’ve dazzled our eyes, captured our imaginations, and "
    }]

});