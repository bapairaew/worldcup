'use strict';

angular.module('worldcupApp')
  .controller('MatchCtrl', function ($scope, $rootScope, $http) {
    $http.get('/api/matches').success(function (matches) {
      $scope.matches = matches;
    });

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
    $scope.update = function (match, home, away) {
      if (angular.isNumber(home) && angular.isNumber(away)) {
        $http.post('/api/matches/score', {
          matchnum: match,
          homeScore: home,
          awayScore: away
        }).success(function () {
        });
      }
    };

    $scope.game = function (match, home, away) {
      if (angular.isString(home) && angular.isString(away)) {
        $http.post('/api/matches/game', {
          matchnum: match,
          home: home,
          away: away
        }).success(function () {
        });
      }
    };
  });
