/**
 * Created with JetBrains WebStorm.
 * User: abderrazak
 * Date: 4/13/13
 * Time: 1:19 PM
 * To change this template use File | Settings | File Templates.
 */
var wizardApp = angular.module('wizardApp',[]);

//
// routers
wizardApp.config(function($routeProvider){
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
})


//
// controllers
wizardApp.controller('LoginCtrl',function($scope, $http) {
    $scope.login = function(user) {
        console.log('authenticating ' + user.email + ' ...')
    }
})

//
wizardApp.controller('WizardCtrl', function($scope){
    $scope.homeMessage = "Welcome To Sfeir Wizards"
})