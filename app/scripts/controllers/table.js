'use strict';

angular.module('worldcupApp')
  .controller('TableCtrl', function ($scope, $rootScope, $http, $window, $location) {
    var godName = 'Pelé';
    $scope.endOfTrial = $location.search().trial ? 0 : 49;

    var width = 120;
    var sortable = false;
    var cellTemplate = '<div class="ngCellText p-{{row.entity[\'points-\' + col.colDef.field]}} {{$parent.$parent.$parent.currentUser.name == row.entity.name ? \'u-col\' : \'\'}}" ng-class="col.colIndex()"><span ng-cell-text>{{row.entity[col.colDef.field]}}</span></div>';
    var headCellTemplate = '<div class="ngCellText {{$parent.$parent.$parent.currentUser.name == row.entity.name ? \'u-col\' : \'\'}}" ng-class="col.colIndex()"><span ng-cell-text>{{row.entity[col.colDef.field]}}</span></div>';

    $scope.currentUser = $rootScope.currentUser;
    $scope.loaded = false;

    $http.get('/api/users' + '?' + $window.Math.random()).success(function (users) {
      var table = users;
      table.push({ name: godName });
      table.forEach(function (u) { u.points = 0; });
      $http.get('/api/predictions' + '?' + $window.Math.random()).success(function (matches) {
        matches.sort(function (a, b) { return a.matchnum - b.matchnum; })
          .filter(function (m) { return m.matchnum >= $scope.endOfTrial; })
          .forEach(function (m) {
            if (m.home !== null) {
              table.forEach(function (r) {
                if (r.name === godName) {
                  if (angular.isDefined(m.homeScore)) {
                    r[m.matchnum] = m.homeScore + ' - ' + m.awayScore;
                    r.points += 5;
                    r['points-' + m.matchnum] = 5;
                  }
                } else {
                  r[m.matchnum] = '';
                  r['points-' + m.matchnum] = angular.isDefined(m.homeScore) ? 0 : '';
                  for (var i = 0; i < m.bets.length; i++) {
                    var b = m.bets[i];
                    if (b.user === r.name) {
                      r[m.matchnum] = b.homeScore + ' - ' + b.awayScore;

                      if (angular.isDefined(m.homeScore)) {
                        var correct = (m.homeScore > m.awayScore && b.homeScore > b.awayScore) ||
                          (m.homeScore < m.awayScore && b.homeScore < b.awayScore) ||
                          (m.homeScore === m.awayScore && b.homeScore === b.awayScore);

                        var p = 0;
                        p += m.homeScore === b.homeScore ? 1 : 0;
                        p += m.awayScore === b.awayScore ? 1 : 0;
                        p += correct ? 3 : 0;
                        r.points += p;

                        r['points-' + m.matchnum] = p;
                      }

                      break;
                    }
                  }
                }
              });
            }
          });
        $scope.table = table;
        $http.get('/api/matches' + '?' + $window.Math.random()).success(function (matches) {
          $scope.gridOptions = {
            data: 'table',
            enablePinning: true,
            sortInfo: { fields: ['points'], directions: ['desc'] },
            enableRowSelection: false,
            headerRowHeight: 40,
            rowHeight: 36,
            columnDefs: [
              { field: 'name', displayName: 'Name', width: 120, pinned: true, cellTemplate: headCellTemplate },
              { field: 'points', displayName: 'Point', width: 120, pinned: true, sorted: true, cellTemplate: headCellTemplate }
            ].concat(matches
              .filter(function (m) { return m.matchnum >= $scope.endOfTrial; })
              .map(function (match) {
              if (match.home) {
                return {
                  field: match.matchnum + '',
                  displayName: match.home.code + ' - ' + match.away.code,
                  fullName: match.home.title + ' - ' + match.away.title,
                  width: width,
                  sortable: sortable,
                  cellTemplate: cellTemplate
                };
              }
            }).filter(function (match) {
              return !!match;
            }).sort(function (a, b) {
              return a.field - b.field;
            }))
          };
          $scope.loaded = true;
        });
      });
    });
  });
