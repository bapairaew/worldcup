'use strict';

angular.module('worldcupApp')
  .controller('RankCtrl', function ($scope, $rootScope, $http, $window) {
    $http.get('/api/users' + '?' + $window.Math.random()).success(function (users) {
      var table = users;
      table.forEach(function (u) { u.points = 0; u.historyPoints = []; u.historyRank = []; });
      $http.get('/api/predictions' + '?' + $window.Math.random()).success(function (matches) {
        matches.sort(function (a, b) { return a.matchnum - b.matchnum; })
          .filter(function (m) { return m.homeScore !== null; })
          .forEach(function (m) {
            if (m.home !== null && angular.isDefined(m.homeScore)) {
              table.forEach(function (r) {
                for (var i = 0; i < m.bets.length; i++) {
                  var b = m.bets[i];
                  if (b.user === r.name) {
                    var correct = (m.homeScore > m.awayScore && b.homeScore > b.awayScore) ||
                      (m.homeScore < m.awayScore && b.homeScore < b.awayScore) ||
                      (m.homeScore === m.awayScore && b.homeScore === b.awayScore);

                    var p = 0;
                    p += m.homeScore === b.homeScore ? 1 : 0;
                    p += m.awayScore === b.awayScore ? 1 : 0;
                    p += correct ? 3 : 0;
                    r.points += p;

                    break;
                  }
                }
                r.historyPoints.push(r.points);
              });
              var historyTable = table.sort(function (a, b) { return b.historyPoints[b.historyPoints.length - 1] - a.historyPoints[a.historyPoints.length - 1]; });
              for (var i = 0; i < historyTable.length; i++) {
                var rank = i + 1;
                if (i > 0) {
                  if (historyTable[i].historyPoints[historyTable[i].historyPoints.length - 1] === historyTable[i - 1].historyPoints[historyTable[i].historyPoints.length - 1]) {
                    rank = historyTable[i - 1].historyRank[historyTable[i - 1].historyRank.length - 1];
                  }
                }
                historyTable[i].historyRank.push(rank);
              }
            }
          });
        $scope.table = table;
        $scope.chartPoints = table.map(function (r) {
          return {
            key: r.name,
            values: r.historyPoints.map(function (r, idx) {
              return [idx, r];
            })
          };
        });
        $scope.chartRank = table.map(function (r) {
          return {
            key: r.name,
            values: r.historyRank.map(function (r, idx) {
              return [idx, r];
            })
          };
        });
      });
    });
    $scope.currentUser = $rootScope.currentUser;
    $scope.mode = 'Table';
  });
