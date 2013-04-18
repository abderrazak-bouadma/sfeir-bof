/**
 * Created with JetBrains WebStorm.
 * User: abderrazak
 * Date: 4/13/13
 * Time: 1:19 PM
 * To change this template use File | Settings | File Templates.
 */
var wizardApp = angular.module('wizardApp',['ngCookies']);

//
// routers
wizardApp.config(function($routeProvider,$locationProvider){
    //
    $routeProvider
        .when('/',
        {
            templateUrl:'partials/login.html',
            controller:'LoginCtrl'
        })
        .when('/wizard',
        {
            templateUrl:'partials/home.html',
            controller:'WizardCtrl'
        })
        .when('/conference/:id',
        {
            templateUrl:'partials/conference.html',
            controller:'ConferenceCtrl'
        })
        .otherwise({
            templateUrl:'Ooops !'

        })
    //
    //$locationProvider.html5Mode(true).hashPrefix('!')
})


//
// controllers
wizardApp.controller('LoginCtrl',function($scope, $http, $location,$cookies) {
    $scope.login = function(user) {
        $http.get('/json/users.json').success(function(data) {
            var authenticatedUser;
            for(var i=0; i<data.users.length; i++) {
                if (user.email == data.users[i].email && user.password == data.users[i].password) {
                    authenticatedUser = data.users[i]
                    break
                }
            }
            if (authenticatedUser != null) {
                console.log('User ' + authenticatedUser.email + ' has been authenticated')
                $location.path('/wizard')
                $cookies.username = authenticatedUser.username
            } else {
                console.log('Authentication failed !')
            }
        })
    }
})


//
wizardApp.controller('WizardCtrl', function($scope,$http,$cookies,$location){


    // ping
    console.log('In WizardCtrl ...')

    //
    $scope.currentUsername = $cookies.username
    $scope.conferences = []

    //
    $http.get('/json/conferences.json').success(function(data) {
        console.log('data loaded')
        $scope.conferences = data.conferences
    })


    $scope.expand = function(key) {
        $location.path('/conference/'+key)
    }

    $scope.logout = function(){
        $location.path('/')
    }
})

wizardApp.controller('ConferenceCtrl', function($scope,$http,$cookies,$routeParams,$location){

    $scope.currentUsername = $cookies.username

    $http.get('/json/users.json').success(function(data) {
        $scope.users = data
    })

    $http.get('/json/conferences.json').success(function(data) {
        for(var i=0; i<data.conferences.length; i++) {
            if (data.conferences[i].key == $routeParams.id) {
                $scope.conference = data.conferences[i]
                break
            }
        }
    })

    $scope.voteUp = function(trackKey) {
        var tracks = $scope.conference.tracks
        for(var i=0; i<tracks.length; i++) {
            if (tracks[i].key == trackKey && tracks[i].rank<=9) {
                tracks[i].rank++
                break
            }
        }
    }

    $scope.voteDown = function(trackKey) {
        var tracks = $scope.conference.tracks
        for(var i=0; i<tracks.length; i++) {
            if (tracks[i].key == trackKey && tracks[i].rank>0) {
                tracks[i].rank--
                break
            }
        }
    }

    $scope.submitTrack = function submitTrack(track) {
        var t = new Object()
        t.key = $scope.conference.tracks
        t.title = track.title
        t.timeSlot = track.timeSlot
        t.speaker = track.speaker
        t.rank = 0
        $scope.conference.tracks.push(t)
        track = null
    }

    /*
    function calculateGlobalRank(conference) {
        var tracks = conference.tracks
        var sumTracksRank = 0
        for(var i=0; i<tracks.length; i++) {
            sumTracksRank +=  tracks[i].rank
        }
        return sumTracksRank / tracks.length
    }

    $scope.globalRank = calculateGlobalRank($scope.conference)
    */

    $scope.logout = function(){
        $location.path('/')
    }
 })