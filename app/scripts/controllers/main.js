'use strict';

angular.module('worldcupApp')
  .controller('MainCtrl', function ($scope, $rootScope, $http, $window, $timeout, $location, Config) {
    $http.get('/api/predictions/' + $rootScope.currentUser.name + '?' + $window.Math.random()).success(function (matches) {
      $scope.matches = matches;
      $timeout(function () {
        $window.smoothScroll($window.document.getElementById('today'), 500);
      }, 1);
    });
    var now = new Date().toJSON();
    var today = null;
    $scope.Config = Config;

    var matchDayCount = 0;
    $scope.matchDay = {};
    $scope.currentGroup = 0;
    $scope.endOfTrial = $location.search().trial ? 0 : 49;
    $scope.showHeader = function (date) {
      var group = +(date.substring(0, 10).replace(/-/g, ''));
      if (+date.substring(11, 13) < 4) {
        group--;
      }
      var showHeader = (group !== $scope.currentGroup);
      $scope.currentGroup = group;
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
    $scope.isToday = function (date, day) {
      if ((date > now) && (today === null || today === day)) {
        today = day;
        return true;
      } else {
        return false;
      }
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
