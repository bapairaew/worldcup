'use strict';

angular.module('worldcupApp')
  .controller('TableCtrl', function ($scope, $rootScope, $http) {
    var godName = 'James Smith';

    $http.get('/api/users').success(function (users) {
      var table = users;
      table.push({ name: godName });
      table.forEach(function (u) { u.points = 0; });
      $http.get('/api/predictions').success(function (matches) {
        matches.sort(function (a, b) { return a.matchnum - b.matchnum; })
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
      });
    });

    var width = 120;
    var sortable = false;
    var cellTemplate = '<div class="ngCellText p-{{row.entity[\'points-\' + col.colDef.field]}} {{$parent.$parent.$parent.currentUser.name == row.entity.name ? \'u-col\' : \'\'}}" ng-class="col.colIndex()"><span ng-cell-text>{{row.entity[col.colDef.field]}}</span></div>';
    var headCellTemplate = '<div class="ngCellText {{$parent.$parent.$parent.currentUser.name == row.entity.name ? \'u-col\' : \'\'}}" ng-class="col.colIndex()"><span ng-cell-text>{{row.entity[col.colDef.field]}}</span></div>';

    $scope.currentUser = $rootScope.currentUser;

    $scope.gridOptions = {
      data: 'table',
      enablePinning: true,
      sortInfo: { fields: ['points'], directions: ['desc'] },
      enableRowSelection: false,
      headerRowHeight: 40,
      rowHeight: 36,
      columnDefs: [
        { field: 'name', displayName: 'Name', width: 120, pinned: true, cellTemplate: headCellTemplate },
        { field: 'points', displayName: 'Point', width: 120, pinned: true, sorted: true, cellTemplate: headCellTemplate },
        {
          field: '1',
          displayName: 'BRA - CRO',
          fullName: 'Brazil - Croatia',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '2',
          displayName: 'MEX - CMR',
          fullName: 'Mexico - Cameroon',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '3',
          displayName: 'ESP - NED',
          fullName: 'Spain - Netherlands',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '4',
          displayName: 'CHI - AUS',
          fullName: 'Chile - Australia',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '5',
          displayName: 'COL - GRE',
          fullName: 'Colombia - Greece',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '6',
          displayName: 'URU - CRC',
          fullName: 'Uruguay - Costa Rica',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '7',
          displayName: 'ENG - ITA',
          fullName: 'England - Italy',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '8',
          displayName: 'CIV - JPN',
          fullName: 'Côte d\'Ivoire - Japan',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '9',
          displayName: 'SUI - ECU',
          fullName: 'Switzerland - Ecuador',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '10',
          displayName: 'FRA - HON',
          fullName: 'France - Honduras',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '11',
          displayName: 'ARG - BIH',
          fullName: 'Argentina - Bosnia and Herzegovina',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '12',
          displayName: 'GER - POR',
          fullName: 'Germany - Portugal',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '13',
          displayName: 'IRN - NGA',
          fullName: 'Iran - Nigeria',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '14',
          displayName: 'GHA - USA',
          fullName: 'Ghana - USA',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '15',
          displayName: 'BEL - ALG',
          fullName: 'Belgium - Algeria',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '16',
          displayName: 'BRA - MEX',
          fullName: 'Brazil - Mexico',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '17',
          displayName: 'RUS - KOR',
          fullName: 'Russia - Korea Republic',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '18',
          displayName: 'AUS - NED',
          fullName: 'Australia - Netherlands',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '19',
          displayName: 'ESP - CHI',
          fullName: 'Spain - Chile',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '20',
          displayName: 'CMR - CRO',
          fullName: 'Cameroon - Croatia',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '21',
          displayName: 'COL - CIV',
          fullName: 'Colombia - Côte d\'Ivoire',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '22',
          displayName: 'URU - ENG',
          fullName: 'Uruguay - England',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '23',
          displayName: 'JPN - GRE',
          fullName: 'Japan - Greece',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '24',
          displayName: 'ITA - CRC',
          fullName: 'Italy - Costa Rica',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '25',
          displayName: 'SUI - FRA',
          fullName: 'Switzerland - France',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '26',
          displayName: 'HON - ECU',
          fullName: 'Honduras - Ecuador',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '27',
          displayName: 'ARG - IRN',
          fullName: 'Argentina - Iran',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '28',
          displayName: 'GER - GHA',
          fullName: 'Germany - Ghana',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '29',
          displayName: 'NGA - BIH',
          fullName: 'Nigeria - Bosnia and Herzegovina',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '30',
          displayName: 'BEL - RUS',
          fullName: 'Belgium - Russia',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '31',
          displayName: 'KOR - ALG',
          fullName: 'Korea Republic - Algeria',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '32',
          displayName: 'USA - POR',
          fullName: 'USA - Portugal',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '33',
          displayName: 'NED - CHI',
          fullName: 'Netherlands - Chile',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '34',
          displayName: 'AUS - ESP',
          fullName: 'Australia - Spain',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '35',
          displayName: 'CMR - BRA',
          fullName: 'Cameroon - Brazil',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '36',
          displayName: 'CRO - MEX',
          fullName: 'Croatia - Mexico',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '37',
          displayName: 'ITA - URU',
          fullName: 'Italy - Uruguay',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '38',
          displayName: 'CRC - ENG',
          fullName: 'Costa Rica - England',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '39',
          displayName: 'JPN - COL',
          fullName: 'Japan - Colombia',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '40',
          displayName: 'GRE - CIV',
          fullName: 'Greece - Côte d\'Ivoire',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '41',
          displayName: 'NGA - ARG',
          fullName: 'Nigeria - Argentina',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '42',
          displayName: 'BIH - IRN',
          fullName: 'Bosnia and Herzegovina - Iran',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '43',
          displayName: 'HON - SUI',
          fullName: 'Honduras - Switzerland',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '44',
          displayName: 'ECU - FRA',
          fullName: 'Ecuador - France',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '45',
          displayName: 'POR - GHA',
          fullName: 'Portugal - Ghana',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '46',
          displayName: 'USA - GER',
          fullName: 'USA - Germany',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '47',
          displayName: 'KOR - BEL',
          fullName: 'Korea Republic - Belgium',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        },
        {
          field: '48',
          displayName: 'ALG - RUS',
          fullName: 'Algeria - Russia',
          width: width,
          sortable: sortable,
          cellTemplate: cellTemplate
        }
      ]
    };
  });
