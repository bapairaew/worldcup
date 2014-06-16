'use strict';

angular.module('worldcupApp')
  .controller('MainCtrl', function ($scope, $rootScope, $http) {
    $http.get('/api/predictions/' + $rootScope.currentUser.name).success(function (matches) {
      $scope.matches = matches;
    });
    var now = new Date().toJSON();

    var matchDayCount = 0;
    $scope.matchDay = {};
    $scope.currentGroup = 0;
    $scope.showHeader = function (date, $last) {
      var group = +(date.substring(0, 10).replace(/-/g, ''));
      if (+date.substring(11, 13) < 4) {
        group--;
      }
      var showHeader = (group !== $scope.currentGroup);
      $scope.currentGroup = $last ? null : group;
      return showHeader;
    };
    $scope.getMatchDay = function (date) {
      if (!angular.isDefined($scope.matchDay[date])) {
        $scope.matchDay[date] = ++matchDayCount;
      }
      return $scope.matchDay[date];
    };
    $scope.isStarted = function (date) {
      return date < now;
    };
    $scope.bet = function (match, home, away) {
      if (angular.isNumber(home) && angular.isNumber(away)) {
        $http.post('/api/bets', {
          match: match,
          homeScore: home,
          awayScore: away
        }).success(function () {
        });
      }
    };
  });
