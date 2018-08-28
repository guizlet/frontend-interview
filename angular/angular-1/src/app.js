import angular from "angular";
import ngRoute from "angular-route";

import html from "./views/index.html";

// Controllers
angular
  .module("LearnMode", ["ngRoute"])
  .config($routeProvider => {
    $routeProvider
      .when("/", {
        templateUrl: html,
        controller: "LearnModeCtrl"
      })
      .otherwise({
        redirectTo: "/"
      });
  })
  .controller("LearnModeCtrl", $scope => {
    const TERMS = [
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

    // code here
  });
