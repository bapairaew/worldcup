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
        $scope.chartPoints = {
          options: {
            chart: {
              type: 'line'
            },
            tooltip: {
              style: {
                padding: 10
              }
            },
          },
          title: {
            text: 'Historical Points'
          },
          series: table.map(function (r, idx) {
            return {
              name: r.name,
              data: r.historyPoints,
              visible: idx < 5
            };
          })
        };

        $scope.chartRank = {
          options: {
            chart: {
              type: 'line'
            },
            tooltip: {
              style: {
                padding: 10
              }
            },
          },
          title: {
            text: 'Historical Ranking'
          },
          yAxis: {
            reversed: true,
          },
          series: table.map(function (r, idx) {
            return {
              name: r.name,
              data: r.historyRank,
              visible: idx < 5
            };
          })
        };
      });
    });
    $scope.currentUser = $rootScope.currentUser;
    $scope.mode = 'table';
  });
