var signIn = angular.module('signIn', ['ui.router']);

signIn.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('signIn', {
    url: "/signIn",
    templateUrl: "partials/signIn.html",
    controller: 'StudentsCtrl'
  });

  $stateProvider.state('whoshere', {
    url: "/whoshere",
    templateUrl: "partials/whoshere.html",
    controller: 'TeachersCtrl'
  });
});
