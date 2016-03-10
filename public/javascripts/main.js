var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http) {

  $scope.name = "DavidLomas20";

  $scope.tweet = function() {
    $.get("/tweet", function(res) {
      console.log(res);
    });
  };


  $scope.getTwitterProfile = function() {
    var href = 'https://api.twitter.com/1.1/account/settings.json';
    $http.get(href).success(function(data) {
      console.log($scope.name);
      console.log(data);

    });
  };

});
