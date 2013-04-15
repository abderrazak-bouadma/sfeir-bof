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
wizardApp.controller('LoginCtrl',function($scope, $http, $cookieStore) {
    $scope.login = function(user) {

        var who;
        console.log('Is there an authenticated user ? ' + $cookieStore.get('currentUser')==null?'No user connected':'current user is ' + $cookieStore.get('currentUser').email)
        console.log('trying to authenticate ' + user.email + ' ...')

        if ($cookieStore.get('currentUser')!=null) {
            who = $cookieStore.get('currentUser')
        } else {
            who  =user
        }

        if (authenticate($http,who)) {
            alert('Welcome ' + who.email)
        } else {
            alert('Authentication failed !')
        }
    }
})

//
var authenticate = function($http, user) {
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
            return true
        } else {
            console.log('Authentication failed !')
            return false
        }
    })
}


//
wizardApp.controller('WizardCtrl', function($scope){
    $scope.welcomeUser = "Welcome To Sfeir Wizards"
})