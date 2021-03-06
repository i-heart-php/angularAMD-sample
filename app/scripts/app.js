define(['common'], function (angularAMD) {
  'use strict';
  var app = angular.module('angularAmdSample', ['ui.router', 'ngResource', 'ui.bootstrap']);

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login', angularAMD.route({
        url: '/login',
        templateUrl: 'views/login.html',
        controllerUrl: 'login'
      }))
      .state('home', angularAMD.route({
        url: '/home',
        templateUrl: 'views/home.html',
        controllerUrl: 'main/home_ctrl'
      }))
      .state('rooms', angularAMD.route({
        url: '/rooms',
        templateUrl: 'views/rooms.html',
        controllerUrl: 'rooms/rooms_ctrl'
      }))
      .state('users', angularAMD.route({
        url: '/users',
        templateUrl: 'views/users.html',
        controllerUrl: 'users/users_ctrl'
      }))
    ;

    // Else
    $urlRouterProvider
      .otherwise('/login');


  }])
  .run(function ($rootScope, $location, Data) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = false;
            Data.get('session').then(function (results) {
                if (results.uid) {
                    $rootScope.authenticated = true;
                    $rootScope.uid = results.uid;
                    $rootScope.name = results.name;
                    $rootScope.email = results.email;
                } else {
                    var nextUrl = next.$$route.originalPath;
                    if (nextUrl == '/signup' || nextUrl == '/login') {

                    } else {
                        $location.path("/login");
                    }
                }
            });
        });
    })
    app.factory("Data", ['$http',
    function ($http) { // This service connects to our REST API

        var serviceBase = 'https://angularamd-sample-c9-iheartphp.c9.io/api/v1/';

        var obj = {};
      
        obj.get = function (q) {
            return $http.get(serviceBase + q).then(function (results) {
                return results.data;
            });
        };
        obj.post = function (q, object) {
            return $http.post(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.put = function (q, object) {
            return $http.put(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.delete = function (q) {
            return $http.delete(serviceBase + q).then(function (results) {
                return results.data;
            });
        };

        return obj;

}]);

  return angularAMD.bootstrap(app);
});
