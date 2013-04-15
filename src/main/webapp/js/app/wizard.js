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
            templateUrl:"partials/login.html",
            controller:"LoginCtrl"
        })
        .when('/wizard',
        {
            templateUrl:"partials/home.html",
            controller:"WizardCtrl"
        })
        .otherwise({
            templateUrl:"Ooops !"

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
wizardApp.controller('WizardCtrl', function($scope,$http,$cookies){

    // ping
    console.log('In WizardCtrl ...')

    //
    $scope.currentUsername = $cookies.username
    $scope.conferences = []

    //
    $http.get('/json/conferences.json').success(function(data) {
        console.log('data loaded')
        $scope.conferences = data
    })


})
