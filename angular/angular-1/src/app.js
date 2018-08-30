import angular from "angular";
import ngRoute from "angular-route";

angular
  .module("LearnMode", ["ngRoute"])
  .config(($routeProvider, $locationProvider) => {
    $routeProvider
      .when("/", {
        template: require("./views/index.html"),
        controller: "LearnModeCtrl"
      })
      .otherwise({
        redirectTo: "/"
      });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("");
  })
  .controller("LearnModeCtrl", $scope => {
    $scope.baseUrl = "/";
    $scope.terms = [
      {
        id: 1,
        word: "Nebraska",
        definition: "Lincoln"
      },
      {
        id: 2,
        word: "Massachusetts",
        definition: "Boston"
      },
      {
        id: 3,
        word: "California",
        definition: "Sacramento"
      }
    ];

    // your code here
  });
