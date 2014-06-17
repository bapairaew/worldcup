'use strict';
/*
var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Team = mongoose.model('Team'),
  Match = mongoose.model('Match'),
  Bet = mongoose.model('Bet');


Team.find({}).remove(function() {
  Team.create(
    { key: 'gre', title: 'Greece', code: 'GRE' },
    { key: 'rus', title: 'Russia', code: 'RUS' },
    { key: 'ned', title: 'Netherlands', code: 'NED' },
    { key: 'ger', title: 'Germany', code: 'GER' },
    { key: 'por', title: 'Portugal', code: 'POR' },
    { key: 'esp', title: 'Spain', code: 'ESP' },
    { key: 'ita', title: 'Italy', code: 'ITA' },
    { key: 'cro', title: 'Croatia', code: 'CRO' },
    { key: 'fra', title: 'France', code: 'FRA' },
    { key: 'eng', title: 'England', code: 'ENG' },
    { key: 'sui', title: 'Switzerland', code: 'SUI' },
    { key: 'bel', title: 'Belgium', code: 'BEL' },
    { key: 'bih', title: 'Bosnia-Herzegovina', code: 'BIH' },
    { key: 'alg', title: 'Algeria', code: 'ALG' },
    { key: 'civ', title: 'C\u00f4te d\'Ivoire', code: 'CIV' },
    { key: 'gha', title: 'Ghana', code: 'GHA' },
    { key: 'cmr', title: 'Cameroon', code: 'CMR' },
    { key: 'nga', title: 'Nigeria', code: 'NGA' },
    { key: 'mex', title: 'Mexico', code: 'MEX' },
    { key: 'usa', title: 'USA', code: 'USA' },
    { key: 'hon', title: 'Honduras', code: 'HON' },
    { key: 'crc', title: 'Costa Rica', code: 'CRC' },
    { key: 'arg', title: 'Argentina', code: 'ARG' },
    { key: 'bra', title: 'Brazil', code: 'BRA' },
    { key: 'chi', title: 'Chile', code: 'CHI' },
    { key: 'uru', title: 'Uruguay', code: 'URU' },
    { key: 'col', title: 'Colombia', code: 'COL' },
    { key: 'ecu', title: 'Ecuador', code: 'ECU' },
    { key: 'aus', title: 'Australia', code: 'AUS' },
    { key: 'jpn', title: 'Japan', code: 'JPN' },
    { key: 'kor', title: 'South Korea', code: 'KOR' },
    { key: 'irn', title: 'Iran', code: 'IRN'}
    , function () {
      console.log('finished populating teams');
  });
});

Match.find({}).remove(function() {
  Match.create(
  {
    matchnum: 1,
    group: 'Group A',
    location: 'Arena de Sao Paulo - Sao Paulo ',
    home: {
      title: 'Brazil',
      code: 'BRA',
      key: 'bra'
    },
    away: {
      title: 'Croatia',
      code: 'CRO',
      key: 'cro'
    },
    homeScore: 3,
    awayScore: 1,
    date: '2014-06-12T20:00:00.000Z'
  },
  {
    matchnum: 2,
    group: 'Group A',
    location: 'Estadio das Dunas - Natal ',
    home: {
      title: 'Mexico',
      code: 'MEX',
      key: 'mex'
    },
    away: {
      title: 'Cameroon',
      code: 'CMR',
      key: 'cmr'
    },
    homeScore: 1,
    awayScore: 0,
    date: '2014-06-13T16:00:00.000Z'
  },
  {
    matchnum: 3,
    group: 'Group B',
    location: 'Arena Fonte Nova - Salvador',
    home: {
      title: 'Spain',
      code: 'ESP',
      key: 'esp'
    },
    away: {
      title: 'Netherlands',
      code: 'NED',
      key: 'ned'
    },
    homeScore: 1,
    awayScore: 5,
    date: '2014-06-13T19:00:00.000Z'
  },
  {
    matchnum: 4,
    group: 'Group B',
    location: 'Arena Pantanal - Cuiaba ',
    home: {
      title: 'Chile',
      code: 'CHI',
      key: 'chi'
    },
    away: {
      title: 'Australia',
      code: 'AUS',
      key: 'aus'
    },
    homeScore: 3,
    awayScore: 1,
    date: '2014-06-13T21:00:00.000Z'
  },
  {
    matchnum: 5,
    group: 'Group C',
    location: 'Estadio Mineirao - Belo Horizonte ',
    home: {
      title: 'Colombia',
      code: 'COL',
      key: 'col'
    },
    away: {
      title: 'Greece',
      code: 'GRE',
      key: 'gre'
    },
    homeScore: 3,
    awayScore: 0,
    date: '2014-06-14T16:00:00.000Z'
  },
  {
    matchnum: 6,
    group: 'Group D',
    location: 'Estadio Castelao - Fortaleza ',
    home: {
      title: 'Uruguay',
      code: 'URU',
      key: 'uru'
    },
    away: {
      title: 'Costa Rica',
      code: 'CRC',
      key: 'crc'
    },
    homeScore: 1,
    awayScore: 3,
    date: '2014-06-14T19:00:00.000Z'
  },
  {
    matchnum: 7,
    group: 'Group D',
    location: 'Arena Amazonia - Manaus ',
    home: {
      title: 'England',
      code: 'ENG',
      key: 'eng'
    },
    away: {
      title: 'Italy',
      code: 'ITA',
      key: 'ita'
    },
    homeScore: 1,
    awayScore: 2,
    date: '2014-06-14T21:00:00.000Z'
  },
  {
    matchnum: 8,
    group: 'Group C',
    location: 'Arena Pernambuco - Recife ',
    home: {
      title: 'Côte d\'Ivoire',
      code: 'CIV',
      key: 'civ'
    },
    away: {
      title: 'Japan',
      code: 'JPN',
      key: 'jpn'
    },
    homeScore: 2,
    awayScore: 1,
    date: '2014-06-15T01:00:00.000Z'
  },
  {
    matchnum: 9,
    group: 'Group E',
    location: 'Estadio Nacional - Brasilia ',
    home: {
      title: 'Switzerland',
      code: 'SUI',
      key: 'sui'
    },
    away: {
      title: 'Ecuador',
      code: 'ECU',
      key: 'ecu'
    },
    homeScore: 2,
    awayScore: 1,
    date: '2014-06-15T16:00:00.000Z'
  },
  {
    matchnum: 10,
    group: 'Group E',
    location: 'Estadio Beira-Rio - Porto Alegre ',
    home: {
      title: 'France',
      code: 'FRA',
      key: 'fra'
    },
    away: {
      title: 'Honduras',
      code: 'HON',
      key: 'hon'
    },
    homeScore: 3,
    awayScore: 0,
    date: '2014-06-15T19:00:00.000Z'
  },
  {
    matchnum: 11,
    group: 'Group F',
    location: 'Maracanã - Estádio Jornalista Mário Filho - Rio De Janeiro ',
    home: {
      title: 'Argentina',
      code: 'ARG',
      key: 'arg'
    },
    away: {
      title: 'Bosnia and Herzegovina',
      code: 'BIH',
      key: 'bih'
    },
    homeScore: 2,
    awayScore: 1,
    date: '2014-06-15T22:00:00.000Z'
  },
  {
    matchnum: 12,
    group: 'Group G',
    location: 'Arena Fonte Nova - Salvador',
    home: {
      title: 'Germany',
      code: 'GER',
      key: 'ger'
    },
    away: {
      title: 'Portugal',
      code: 'POR',
      key: 'por'
    },
    date: '2014-06-16T16:00:00.000Z'
  },
  {
    matchnum: 13,
    group: 'Group F',
    location: 'Arena da Baixada - Curitiba ',
    home: {
      title: 'Iran',
      code: 'IRN',
      key: 'irn'
    },
    away: {
      title: 'Nigeria',
      code: 'NGA',
      key: 'nga'
    },
    date: '2014-06-16T19:00:00.000Z'
  },
  {
    matchnum: 14,
    group: 'Group G',
    location: 'Estadio das Dunas - Natal ',
    home: {
      title: 'Ghana',
      code: 'GHA',
      key: 'gha'
    },
    away: {
      title: 'USA',
      code: 'USA',
      key: 'usa'
    },
    date: '2014-06-16T22:00:00.000Z'
  },
  {
    matchnum: 15,
    group: 'Group H',
    location: 'Estadio Mineirao - Belo Horizonte ',
    home: {
      title: 'Belgium',
      code: 'BEL',
      key: 'bel'
    },
    away: {
      title: 'Algeria',
      code: 'ALG',
      key: 'alg'
    },
    date: '2014-06-17T16:00:00.000Z'
  },
  {
    matchnum: 16,
    group: 'Group A',
    location: 'Estadio Castelao - Fortaleza ',
    home: {
      title: 'Brazil',
      code: 'BRA',
      key: 'bra'
    },
    away: {
      title: 'Mexico',
      code: 'MEX',
      key: 'mex'
    },
    date: '2014-06-17T19:00:00.000Z'
  },
  {
    matchnum: 17,
    group: 'Group H',
    location: 'Arena Pantanal - Cuiaba ',
    home: {
      title: 'Russia',
      code: 'RUS',
      key: 'rus'
    },
    away: {
      title: 'Korea Republic',
      code: 'KOR',
      key: 'kor'
    },
    date: '2014-06-17T21:00:00.000Z'
  },
  {
    matchnum: 18,
    group: 'Group B',
    location: 'Estadio Beira-Rio - Porto Alegre ',
    home: {
      title: 'Australia',
      code: 'AUS',
      key: 'aus'
    },
    away: {
      title: 'Netherlands',
      code: 'NED',
      key: 'ned'
    },
    date: '2014-06-18T16:00:00.000Z'
  },
  {
    matchnum: 19,
    group: 'Group B',
    location: 'Maracanã - Estádio Jornalista Mário Filho - Rio De Janeiro ',
    home: {
      title: 'Spain',
      code: 'ESP',
      key: 'esp'
    },
    away: {
      title: 'Chile',
      code: 'CHI',
      key: 'chi'
    },
    date: '2014-06-18T19:00:00.000Z'
  },
  {
    matchnum: 20,
    group: 'Group A',
    location: 'Arena Amazonia - Manaus ',
    home: {
      title: 'Cameroon',
      code: 'CMR',
      key: 'cmr'
    },
    away: {
      title: 'Croatia',
      code: 'CRO',
      key: 'cro'
    },
    date: '2014-06-18T21:00:00.000Z'
  },
  {
    matchnum: 21,
    group: 'Group C',
    location: 'Estadio Nacional - Brasilia ',
    home: {
      title: 'Colombia',
      code: 'COL',
      key: 'col'
    },
    away: {
      title: 'Côte d\'Ivoire',
      code: 'CIV',
      key: 'civ'
    },
    date: '2014-06-19T16:00:00.000Z'
  },
  {
    matchnum: 22,
    group: 'Group D',
    location: 'Arena de Sao Paulo - Sao Paulo ',
    home: {
      title: 'Uruguay',
      code: 'URU',
      key: 'uru'
    },
    away: {
      title: 'England',
      code: 'ENG',
      key: 'eng'
    },
    date: '2014-06-19T19:00:00.000Z'
  },
  {
    matchnum: 23,
    group: 'Group C',
    location: 'Estadio das Dunas - Natal ',
    home: {
      title: 'Japan',
      code: 'JPN',
      key: 'jpn'
    },
    away: {
      title: 'Greece',
      code: 'GRE',
      key: 'gre'
    },
    date: '2014-06-19T22:00:00.000Z'
  },
  {
    matchnum: 24,
    group: 'Group D',
    location: 'Arena Pernambuco - Recife ',
    home: {
      title: 'Italy',
      code: 'ITA',
      key: 'ita'
    },
    away: {
      title: 'Costa Rica',
      code: 'CRC',
      key: 'crc'
    },
    date: '2014-06-20T16:00:00.000Z'
  },
  {
    matchnum: 25,
    group: 'Group E',
    location: 'Arena Fonte Nova - Salvador',
    home: {
      title: 'Switzerland',
      code: 'SUI',
      key: 'sui'
    },
    away: {
      title: 'France',
      code: 'FRA',
      key: 'fra'
    },
    date: '2014-06-20T19:00:00.000Z'
  },
  {
    matchnum: 26,
    group: 'Group E',
    location: 'Arena da Baixada - Curitiba ',
    home: {
      title: 'Honduras',
      code: 'HON',
      key: 'hon'
    },
    away: {
      title: 'Ecuador',
      code: 'ECU',
      key: 'ecu'
    },
    date: '2014-06-20T22:00:00.000Z'
  },
  {
    matchnum: 27,
    group: 'Group F',
    location: 'Estadio Mineirao - Belo Horizonte ',
    home: {
      title: 'Argentina',
      code: 'ARG',
      key: 'arg'
    },
    away: {
      title: 'Iran',
      code: 'IRN',
      key: 'irn'
    },
    date: '2014-06-21T16:00:00.000Z'
  },
  {
    matchnum: 28,
    group: 'Group G',
    location: 'Estadio Castelao - Fortaleza ',
    home: {
      title: 'Germany',
      code: 'GER',
      key: 'ger'
    },
    away: {
      title: 'Ghana',
      code: 'GHA',
      key: 'gha'
    },
    date: '2014-06-21T19:00:00.000Z'
  },
  {
    matchnum: 29,
    group: 'Group F',
    location: 'Arena Pantanal - Cuiaba ',
    home: {
      title: 'Nigeria',
      code: 'NGA',
      key: 'nga'
    },
    away: {
      title: 'Bosnia and Herzegovina',
      code: 'BIH',
      key: 'bih'
    },
    date: '2014-06-21T21:00:00.000Z'
  },
  {
    matchnum: 30,
    group: 'Group H',
    location: 'Maracanã - Estádio Jornalista Mário Filho - Rio De Janeiro ',
    home: {
      title: 'Belgium',
      code: 'BEL',
      key: 'bel'
    },
    away: {
      title: 'Russia',
      code: 'RUS',
      key: 'rus'
    },
    date: '2014-06-22T16:00:00.000Z'
  },
  {
    matchnum: 31,
    group: 'Group H',
    location: 'Estadio Beira-Rio - Porto Alegre ',
    home: {
      title: 'Korea Republic',
      code: 'KOR',
      key: 'kor'
    },
    away: {
      title: 'Algeria',
      code: 'ALG',
      key: 'alg'
    },
    date: '2014-06-22T19:00:00.000Z'
  },
  {
    matchnum: 32,
    group: 'Group G',
    location: 'Arena Amazonia - Manaus ',
    home: {
      title: 'USA',
      code: 'USA',
      key: 'usa'
    },
    away: {
      title: 'Portugal',
      code: 'POR',
      key: 'por'
    },
    date: '2014-06-22T21:00:00.000Z'
  },
  {
    matchnum: 33,
    group: 'Group B',
    location: 'Arena de Sao Paulo - Sao Paulo ',
    home: {
      title: 'Netherlands',
      code: 'NED',
      key: 'ned'
    },
    away: {
      title: 'Chile',
      code: 'CHI',
      key: 'chi'
    },
    date: '2014-06-23T16:00:00.000Z'
  },
  {
    matchnum: 34,
    group: 'Group B',
    location: 'Arena da Baixada - Curitiba ',
    home: {
      title: 'Australia',
      code: 'AUS',
      key: 'aus'
    },
    away: {
      title: 'Spain',
      code: 'ESP',
      key: 'esp'
    },
    date: '2014-06-23T16:00:00.000Z'
  },
  {
    matchnum: 35,
    group: 'Group A',
    location: 'Estadio Nacional - Brasilia ',
    home: {
      title: 'Cameroon',
      code: 'CMR',
      key: 'cmr'
    },
    away: {
      title: 'Brazil',
      code: 'BRA',
      key: 'bra'
    },
    date: '2014-06-23T20:00:00.000Z'
  },
  {
    matchnum: 36,
    group: 'Group A',
    location: 'Arena Pernambuco - Recife ',
    home: {
      title: 'Croatia',
      code: 'CRO',
      key: 'cro'
    },
    away: {
      title: 'Mexico',
      code: 'MEX',
      key: 'mex'
    },
    date: '2014-06-23T20:00:00.000Z'
  },
  {
    matchnum: 37,
    group: 'Group D',
    location: 'Estadio das Dunas - Natal ',
    home: {
      title: 'Italy',
      code: 'ITA',
      key: 'ita'
    },
    away: {
      title: 'Uruguay',
      code: 'URU',
      key: 'uru'
    },
    date: '2014-06-24T16:00:00.000Z'
  },
  {
    matchnum: 38,
    group: 'Group D',
    location: 'Estadio Mineirao - Belo Horizonte ',
    home: {
      title: 'Costa Rica',
      code: 'CRC',
      key: 'crc'
    },
    away: {
      title: 'England',
      code: 'ENG',
      key: 'eng'
    },
    date: '2014-06-24T16:00:00.000Z'
  },
  {
    matchnum: 39,
    group: 'Group C',
    location: 'Arena Pantanal - Cuiaba ',
    home: {
      title: 'Japan',
      code: 'JPN',
      key: 'jpn'
    },
    away: {
      title: 'Colombia',
      code: 'COL',
      key: 'col'
    },
    date: '2014-06-24T19:00:00.000Z'
  },
  {
    matchnum: 40,
    group: 'Group C',
    location: 'Estadio Castelao - Fortaleza ',
    home: {
      title: 'Greece',
      code: 'GRE',
      key: 'gre'
    },
    away: {
      title: 'Côte d\'Ivoire',
      code: 'CIV',
      key: 'civ'
    },
    date: '2014-06-24T20:00:00.000Z'
  },
  {
    matchnum: 41,
    group: 'Group F',
    location: 'Estadio Beira-Rio - Porto Alegre ',
    home: {
      title: 'Nigeria',
      code: 'NGA',
      key: 'nga'
    },
    away: {
      title: 'Argentina',
      code: 'ARG',
      key: 'arg'
    },
    date: '2014-06-25T16:00:00.000Z'
  },
  {
    matchnum: 42,
    group: 'Group F',
    location: 'Arena Fonte Nova - Salvador',
    home: {
      title: 'Bosnia and Herzegovina',
      code: 'BIH',
      key: 'bih'
    },
    away: {
      title: 'Iran',
      code: 'IRN',
      key: 'irn'
    },
    date: '2014-06-25T16:00:00.000Z'
  },
  {
    matchnum: 43,
    group: 'Group E',
    location: 'Arena Amazonia - Manaus ',
    home: {
      title: 'Honduras',
      code: 'HON',
      key: 'hon'
    },
    away: {
      title: 'Switzerland',
      code: 'SUI',
      key: 'sui'
    },
    date: '2014-06-25T19:00:00.000Z'
  },
  {
    matchnum: 44,
    group: 'Group E',
    location: 'Maracanã - Estádio Jornalista Mário Filho - Rio De Janeiro ',
    home: {
      title: 'Ecuador',
      code: 'ECU',
      key: 'ecu'
    },
    away: {
      title: 'France',
      code: 'FRA',
      key: 'fra'
    },
    date: '2014-06-25T20:00:00.000Z'
  },
  {
    matchnum: 45,
    group: 'Group G',
    location: 'Estadio Nacional - Brasilia ',
    home: {
      title: 'Portugal',
      code: 'POR',
      key: 'por'
    },
    away: {
      title: 'Ghana',
      code: 'GHA',
      key: 'gha'
    },
    date: '2014-06-26T16:00:00.000Z'
  },
  {
    matchnum: 46,
    group: 'Group G',
    location: 'Arena Pernambuco - Recife ',
    home: {
      title: 'USA',
      code: 'USA',
      key: 'usa'
    },
    away: {
      title: 'Germany',
      code: 'GER',
      key: 'ger'
    },
    date: '2014-06-26T16:00:00.000Z'
  },
  {
    matchnum: 47,
    group: 'Group H',
    location: 'Arena de Sao Paulo - Sao Paulo ',
    home: {
      title: 'Korea Republic',
      code: 'KOR',
      key: 'kor'
    },
    away: {
      title: 'Belgium',
      code: 'BEL',
      key: 'bel'
    },
    date: '2014-06-26T20:00:00.000Z'
  },
  {
    matchnum: 48,
    group: 'Group H',
    location: 'Arena da Baixada - Curitiba ',
    home: {
      title: 'Algeria',
      code: 'ALG',
      key: 'alg'
    },
    away: {
      title: 'Russia',
      code: 'RUS',
      key: 'rus'
    },
    date: '2014-06-26T20:00:00.000Z'
  },
  {
    matchnum: 49,
    group: 'Round of 16',
    location: 'Estadio Mineirao - Belo Horizonte ',
    home: null,
    away: null,
    date: '2014-06-28T16:00:00.000Z'
  },
  {
    matchnum: 50,
    group: 'Round of 16',
    location: 'Maracanã - Estádio Jornalista Mário Filho - Rio De Janeiro ',
    home: null,
    away: null,
    date: '2014-06-28T20:00:00.000Z'
  },
  {
    matchnum: 51,
    group: 'Round of 16',
    location: 'Estadio Castelao - Fortaleza ',
    home: null,
    away: null,
    date: '2014-06-29T16:00:00.000Z'
  },
  {
    matchnum: 52,
    group: 'Round of 16',
    location: 'Arena Pernambuco - Recife ',
    home: null,
    away: null,
    date: '2014-06-29T20:00:00.000Z'
  },
  {
    matchnum: 53,
    group: 'Round of 16',
    location: 'Estadio Nacional - Brasilia ',
    home: null,
    away: null,
    date: '2014-06-30T16:00:00.000Z'
  },
  {
    matchnum: 54,
    group: 'Round of 16',
    location: 'Estadio Beira-Rio - Porto Alegre ',
    home: null,
    away: null,
    date: '2014-06-30T20:00:00.000Z'
  },
  {
    matchnum: 55,
    group: 'Round of 16',
    location: 'Arena de Sao Paulo - Sao Paulo ',
    home: null,
    away: null,
    date: '2014-07-01T16:00:00.000Z'
  },
  {
    matchnum: 56,
    group: 'Round of 16',
    location: 'Arena Fonte Nova - Salvador',
    home: null,
    away: null,
    date: '2014-07-01T20:00:00.000Z'
  },
  {
    matchnum: 57,
    group: 'Quarter-finals',
    location: 'Maracanã - Estádio Jornalista Mário Filho - Rio De Janeiro ',
    home: null,
    away: null,
    date: '2014-07-04T16:00:00.000Z'
  },
  {
    matchnum: 58,
    group: 'Quarter-finals',
    location: 'Estadio Castelao - Fortaleza ',
    home: null,
    away: null,
    date: '2014-07-04T20:00:00.000Z'
  },
  {
    matchnum: 59,
    group: 'Quarter-finals',
    location: 'Estadio Nacional - Brasilia ',
    home: null,
    away: null,
    date: '2014-07-05T16:00:00.000Z'
  },
  {
    matchnum: 60,
    group: 'Quarter-finals',
    location: 'Arena Fonte Nova - Salvador',
    home: null,
    away: null,
    date: '2014-07-05T20:00:00.000Z'
  },
  {
    matchnum: 61,
    group: 'Semi-finals',
    location: 'Estadio Mineirao - Belo Horizonte ',
    home: null,
    away: null,
    date: '2014-07-08T20:00:00.000Z'
  },
  {
    matchnum: 62,
    group: 'Semi-finals',
    location: 'Arena de Sao Paulo - Sao Paulo ',
    home: null,
    away: null,
    date: '2014-07-09T20:00:00.000Z'
  },
  {
    matchnum: 63,
    group: 'Play-off for third place',
    location: 'Estadio Nacional - Brasilia ',
    home: null,
    away: null,
    date: '2014-07-12T20:00:00.000Z'
  },
  {
    matchnum: 64,
    group: 'Final',
    location: 'Maracanã - Estádio Jornalista Mário Filho - Rio De Janeiro ',
    home: null,
    away: null,
    date: '2014-07-13T19:00:00.000Z'
  }, function () {
      console.log('finished populating matches');
    }
  );
});

User.find({}).remove(function() {
  User.create({
    name: 'Chat',
    email: 'Chat',
    password: 'worldcup'
  },
  {
    name: 'Boyd',
    email: 'Boyd',
    password: 'worldcup'
  },
  {
    name: 'Parn',
    email: 'Parn',
    password: 'worldcup'
  },
  {
    name: 'Ratch',
    email: 'Ratch',
    password: 'worldcup'
  },
  {
    name: 'Golf1',
    email: 'Golf1',
    password: 'worldcup'
  },
  {
    name: 'R',
    email: 'R',
    password: 'worldcup'
  },
  {
    name: 'Bank',
    email: 'Bank',
    password: 'worldcup'
  },
  {
    name: 'Boat',
    email: 'Boat',
    password: 'worldcup'
  },
  {
    name: 'Pom',
    email: 'Pom',
    password: 'worldcup'
  },
  {
    name: 'Kom',
    email: 'Kom',
    password: 'worldcup'
  },
  {
    name: 'Sam',
    email: 'Sam',
    password: 'worldcup'
  },
  {
    name: 'Golf2',
    email: 'Golf2',
    password: 'worldcup'
  },
  {
    name: 'Yot',
    email: 'Yot',
    password: 'worldcup'
  },
  {
    name: 'Ki',
    email: 'Ki',
    password: 'worldcup'
  },
  {
    name: 'Kris',
    email: 'Kris',
    password: 'worldcup'
  },
  {
    name: 'Son',
    email: 'Son',
    password: 'worldcup'
  },
  {
    name: 'Guang',
    email: 'Guang',
    password: 'worldcup'
  },
  {
    name: 'Ping',
    email: 'Ping',
    password: 'worldcup'
  },
  {
    name: 'Shon',
    email: 'Shon',
    password: 'worldcup'
  },
  {
    name: 'Boy',
    email: 'Boy',
    password: 'worldcup'
  },
  {
    name: 'Mine',
    email: 'Mine',
    password: 'worldcup'
  },
  {
    name: 'P\'Nut',
    email: 'P\'Nut',
    password: 'worldcup'
  },
  {
    name: 'Te',
    email: 'Te',
    password: 'worldcup'
  }
  , function () {
      console.log('finished populating users');
    }
  );
});

Bet.find({}).remove(function() {
  Bet.create(
    { user: 'Bank', match: 1, homeScore: 2, awayScore: 1 },
    { user: 'Bank', match: 2, homeScore: 1, awayScore: 1 },
    { user: 'Bank', match: 3, homeScore: 2, awayScore: 2 },
    { user: 'Bank', match: 4, homeScore: 2, awayScore: 1 },
    { user: 'Bank', match: 5, homeScore: 2, awayScore: 1 },
    { user: 'Bank', match: 8, homeScore: 1, awayScore: 2 },
    { user: 'Bank', match: 6, homeScore: 2, awayScore: 2 },
    { user: 'Bank', match: 7, homeScore: 2, awayScore: 3 },
    { user: 'Bank', match: 9, homeScore: 2, awayScore: 1 },
    { user: 'Bank', match: 10, homeScore: 1, awayScore: 1 },
    { user: 'Bank', match: 11, homeScore: 2, awayScore: 1 },
    { user: 'Bank', match: 12, homeScore: 2, awayScore: 1 },
    { user: 'Bank', match: 13, homeScore: 1, awayScore: 1 },
    { user: 'Bank', match: 14, homeScore: 1, awayScore: 2 },
    { user: 'Bank', match: 15, homeScore: 3, awayScore: 1 },
    { user: 'Boat', match: 1, homeScore: 3, awayScore: 0 },
    { user: 'Boat', match: 2, homeScore: 1, awayScore: 1 },
    { user: 'Boat', match: 3, homeScore: 0, awayScore: 0 },
    { user: 'Boat', match: 4, homeScore: 1, awayScore: 0 },
    { user: 'Boat', match: 5, homeScore: 2, awayScore: 1 },
    { user: 'Boat', match: 8, homeScore: 1, awayScore: 1 },
    { user: 'Boat', match: 6, homeScore: 2, awayScore: 0 },
    { user: 'Boat', match: 7, homeScore: 0, awayScore: 1 },
    { user: 'Boat', match: 9, homeScore: 1, awayScore: 1 },
    { user: 'Boat', match: 10, homeScore: 2, awayScore: 0 },
    { user: 'Boat', match: 11, homeScore: 3, awayScore: 1 },
    { user: 'Boat', match: 12, homeScore: 2, awayScore: 1 },
    { user: 'Boat', match: 13, homeScore: 0, awayScore: 0 },
    { user: 'Boat', match: 14, homeScore: 2, awayScore: 1 },
    { user: 'Boyd', match: 1, homeScore: 2, awayScore: 1 },
    { user: 'Boyd', match: 2, homeScore: 2, awayScore: 1 },
    { user: 'Boyd', match: 3, homeScore: 2, awayScore: 1 },
    { user: 'Boyd', match: 4, homeScore: 2, awayScore: 1 },
    { user: 'Boyd', match: 5, homeScore: 1, awayScore: 0 },
    { user: 'Boyd', match: 8, homeScore: 0, awayScore: 1 },
    { user: 'Boyd', match: 6, homeScore: 1, awayScore: 0 },
    { user: 'Boyd', match: 7, homeScore: 0, awayScore: 0 },
    { user: 'Boyd', match: 9, homeScore: 0, awayScore: 1 },
    { user: 'Boyd', match: 10, homeScore: 1, awayScore: 0 },
    { user: 'Boyd', match: 11, homeScore: 1, awayScore: 0 },
    { user: 'Boyd', match: 12, homeScore: 2, awayScore: 1 },
    { user: 'Boyd', match: 13, homeScore: 1, awayScore: 2 },
    { user: 'Boyd', match: 14, homeScore: 1, awayScore: 2 },
    { user: 'Chat', match: 1, homeScore: 2, awayScore: 0 },
    { user: 'Chat', match: 2, homeScore: 1, awayScore: 0 },
    { user: 'Chat', match: 3, homeScore: 1, awayScore: 2 },
    { user: 'Chat', match: 4, homeScore: 1, awayScore: 0 },
    { user: 'Chat', match: 5, homeScore: 0, awayScore: 1 },
    { user: 'Chat', match: 8, homeScore: 1, awayScore: 2 },
    { user: 'Chat', match: 6, homeScore: 2, awayScore: 0 },
    { user: 'Chat', match: 7, homeScore: 0, awayScore: 1 },
    { user: 'Chat', match: 9, homeScore: 0, awayScore: 1 },
    { user: 'Chat', match: 10, homeScore: 1, awayScore: 0 },
    { user: 'Chat', match: 11, homeScore: 3, awayScore: 0 },
    { user: 'Chat', match: 12, homeScore: 0, awayScore: 1 },
    { user: 'Chat', match: 13, homeScore: 0, awayScore: 2 },
    { user: 'Chat', match: 14, homeScore: 1, awayScore: 0 },
    { user: 'Chat', match: 15, homeScore: 3, awayScore: 0 },
    { user: 'Chat', match: 16, homeScore: 2, awayScore: 1 },
    { user: 'Golf1', match: 1, homeScore: 2, awayScore: 0 },
    { user: 'Golf1', match: 2, homeScore: 2, awayScore: 1 },
    { user: 'Golf1', match: 3, homeScore: 1, awayScore: 0 },
    { user: 'Golf1', match: 4, homeScore: 1, awayScore: 0 },
    { user: 'Golf1', match: 5, homeScore: 0, awayScore: 1 },
    { user: 'Golf1', match: 8, homeScore: 2, awayScore: 1 },
    { user: 'Golf1', match: 6, homeScore: 2, awayScore: 1 },
    { user: 'Golf1', match: 7, homeScore: 1, awayScore: 0 },
    { user: 'Golf1', match: 9, homeScore: 2, awayScore: 1 },
    { user: 'Golf1', match: 10, homeScore: 2, awayScore: 0 },
    { user: 'Golf1', match: 11, homeScore: 3, awayScore: 1 },
    { user: 'Golf1', match: 12, homeScore: 2, awayScore: 0 },
    { user: 'Golf1', match: 13, homeScore: 0, awayScore: 2 },
    { user: 'Golf1', match: 14, homeScore: 2, awayScore: 1 },
    { user: 'Golf2', match: 1, homeScore: 2, awayScore: 1 },
    { user: 'Golf2', match: 2, homeScore: 0, awayScore: 1 },
    { user: 'Golf2', match: 3, homeScore: 2, awayScore: 0 },
    { user: 'Golf2', match: 4, homeScore: 1, awayScore: 1 },
    { user: 'Golf2', match: 5, homeScore: 0, awayScore: 0 },
    { user: 'Golf2', match: 8, homeScore: 0, awayScore: 1 },
    { user: 'Golf2', match: 6, homeScore: 1, awayScore: 0 },
    { user: 'Golf2', match: 7, homeScore: 1, awayScore: 2 },
    { user: 'Golf2', match: 9, homeScore: 0, awayScore: 0 },
    { user: 'Golf2', match: 10, homeScore: 2, awayScore: 0 },
    { user: 'Golf2', match: 11, homeScore: 3, awayScore: 0 },
    { user: 'Golf2', match: 12, homeScore: 1, awayScore: 2 },
    { user: 'Golf2', match: 13, homeScore: 0, awayScore: 2 },
    { user: 'Golf2', match: 14, homeScore: 0, awayScore: 2 },
    { user: 'Golf2', match: 15, homeScore: 1, awayScore: 0 },
    { user: 'Golf2', match: 16, homeScore: 2, awayScore: 0 },
    { user: 'Golf2', match: 17, homeScore: 0, awayScore: 1 },
    { user: 'Golf2', match: 18, homeScore: 0, awayScore: 3 },
    { user: 'Guang', match: 1, homeScore: 3, awayScore: 1 },
    { user: 'Guang', match: 2, homeScore: 2, awayScore: 3 },
    { user: 'Guang', match: 3, homeScore: 0, awayScore: 0 },
    { user: 'Guang', match: 4, homeScore: 1, awayScore: 2 },
    { user: 'Guang', match: 5, homeScore: 1, awayScore: 3 },
    { user: 'Guang', match: 8, homeScore: 2, awayScore: 3 },
    { user: 'Guang', match: 6, homeScore: 3, awayScore: 2 },
    { user: 'Guang', match: 7, homeScore: 1, awayScore: 2 },
    { user: 'Guang', match: 9, homeScore: 2, awayScore: 2 },
    { user: 'Guang', match: 10, homeScore: 2, awayScore: 1 },
    { user: 'Guang', match: 11, homeScore: 2, awayScore: 3 },
    { user: 'Guang', match: 12, homeScore: 2, awayScore: 0 },
    { user: 'Guang', match: 13, homeScore: 2, awayScore: 0 },
    { user: 'Guang', match: 14, homeScore: 3, awayScore: 5 },
    { user: 'Guang', match: 15, homeScore: 3, awayScore: 0 },
    { user: 'Guang', match: 16, homeScore: 3, awayScore: 2 },
    { user: 'Guang', match: 17, homeScore: 2, awayScore: 2 },
    { user: 'Ki', match: 1, homeScore: 2, awayScore: 0 },
    { user: 'Ki', match: 2, homeScore: 1, awayScore: 1 },
    { user: 'Ki', match: 3, homeScore: 2, awayScore: 1 },
    { user: 'Ki', match: 4, homeScore: 1, awayScore: 0 },
    { user: 'Ki', match: 5, homeScore: 1, awayScore: 1 },
    { user: 'Ki', match: 8, homeScore: 0, awayScore: 1 },
    { user: 'Ki', match: 6, homeScore: 2, awayScore: 0 },
    { user: 'Ki', match: 7, homeScore: 0, awayScore: 2 },
    { user: 'Ki', match: 9, homeScore: 0, awayScore: 0 },
    { user: 'Ki', match: 10, homeScore: 1, awayScore: 0 },
    { user: 'Ki', match: 11, homeScore: 3, awayScore: 0 },
    { user: 'Ki', match: 12, homeScore: 2, awayScore: 1 },
    { user: 'Ki', match: 13, homeScore: 0, awayScore: 0 },
    { user: 'Ki', match: 14, homeScore: 1, awayScore: 0 },
    { user: 'Ki', match: 15, homeScore: 2, awayScore: 0 },
    { user: 'Ki', match: 16, homeScore: 3, awayScore: 0 },
    { user: 'Kom', match: 1, homeScore: 1, awayScore: 1 },
    { user: 'Kom', match: 2, homeScore: 2, awayScore: 1 },
    { user: 'Kom', match: 3, homeScore: 1, awayScore: 2 },
    { user: 'Kom', match: 4, homeScore: 1, awayScore: 1 },
    { user: 'Kom', match: 5, homeScore: 1, awayScore: 1 },
    { user: 'Kom', match: 8, homeScore: 1, awayScore: 2 },
    { user: 'Kom', match: 6, homeScore: 2, awayScore: 1 },
    { user: 'Kom', match: 7, homeScore: 1, awayScore: 2 },
    { user: 'Kom', match: 9, homeScore: 2, awayScore: 1 },
    { user: 'Kom', match: 10, homeScore: 2, awayScore: 1 },
    { user: 'Kom', match: 11, homeScore: 1, awayScore: 2 },
    { user: 'Kom', match: 12, homeScore: 1, awayScore: 1 },
    { user: 'Kom', match: 13, homeScore: 1, awayScore: 1 },
    { user: 'Kom', match: 14, homeScore: 1, awayScore: 1 },
    { user: 'Kom', match: 15, homeScore: 2, awayScore: 1 },
    { user: 'Kom', match: 16, homeScore: 2, awayScore: 1 },
    { user: 'Kom', match: 17, homeScore: 2, awayScore: 1 },
    { user: 'Kom', match: 18, homeScore: 1, awayScore: 2 },
    { user: 'Kom', match: 19, homeScore: 1, awayScore: 2 },
    { user: 'Kom', match: 20, homeScore: 1, awayScore: 2 },
    { user: 'Kris', match: 1, homeScore: 3, awayScore: 3 },
    { user: 'Kris', match: 2, homeScore: 1, awayScore: 0 },
    { user: 'Kris', match: 3, homeScore: 2, awayScore: 1 },
    { user: 'Kris', match: 4, homeScore: 2, awayScore: 0 },
    { user: 'Kris', match: 5, homeScore: 1, awayScore: 1 },
    { user: 'Kris', match: 8, homeScore: 1, awayScore: 1 },
    { user: 'Kris', match: 6, homeScore: 1, awayScore: 1 },
    { user: 'Kris', match: 7, homeScore: 1, awayScore: 1 },
    { user: 'Kris', match: 9, homeScore: 1, awayScore: 1 },
    { user: 'Kris', match: 10, homeScore: 1, awayScore: 1 },
    { user: 'Kris', match: 11, homeScore: 1, awayScore: 1 },
    { user: 'Kris', match: 12, homeScore: 2, awayScore: 1 },
    { user: 'Kris', match: 13, homeScore: 1, awayScore: 2 },
    { user: 'Kris', match: 14, homeScore: 2, awayScore: 1 },
    { user: 'Kris', match: 15, homeScore: 3, awayScore: 1 },
    { user: 'Kris', match: 16, homeScore: 3, awayScore: 2 },
    { user: 'Kris', match: 17, homeScore: 2, awayScore: 2 },
    { user: 'Kris', match: 18, homeScore: 1, awayScore: 4 },
    { user: 'Kris', match: 19, homeScore: 2, awayScore: 3 },
    { user: 'Kris', match: 20, homeScore: 3, awayScore: 1 },
    { user: 'Kris', match: 21, homeScore: 2, awayScore: 1 },
    { user: 'Kris', match: 22, homeScore: 1, awayScore: 3 },
    { user: 'Kris', match: 23, homeScore: 1, awayScore: 0 },
    { user: 'Kris', match: 24, homeScore: 4, awayScore: 1 },
    { user: 'Kris', match: 25, homeScore: 2, awayScore: 4 },
    { user: 'Kris', match: 26, homeScore: 2, awayScore: 2 },
    { user: 'Kris', match: 27, homeScore: 5, awayScore: 1 },
    { user: 'Kris', match: 28, homeScore: 4, awayScore: 1 },
    { user: 'Kris', match: 29, homeScore: 2, awayScore: 1 },
    { user: 'Kris', match: 30, homeScore: 1, awayScore: 1 },
    { user: 'Kris', match: 31, homeScore: 1, awayScore: 4 },
    { user: 'Kris', match: 32, homeScore: 3, awayScore: 2 },
    { user: 'Kris', match: 33, homeScore: 2, awayScore: 3 },
    { user: 'Kris', match: 34, homeScore: 2, awayScore: 4 },
    { user: 'Kris', match: 35, homeScore: 1, awayScore: 5 },
    { user: 'Kris', match: 36, homeScore: 2, awayScore: 4 },
    { user: 'Kris', match: 37, homeScore: 33, awayScore: 3 },
    { user: 'Kris', match: 38, homeScore: 1, awayScore: 5 },
    { user: 'Kris', match: 39, homeScore: 3, awayScore: 4 },
    { user: 'Kris', match: 40, homeScore: 2, awayScore: 1 },
    { user: 'Kris', match: 41, homeScore: 1, awayScore: 5 },
    { user: 'Kris', match: 42, homeScore: 2, awayScore: 2 },
    { user: 'Kris', match: 43, homeScore: 9, awayScore: 10 },
    { user: 'Parn', match: 1, homeScore: 2, awayScore: 1 },
    { user: 'Parn', match: 2, homeScore: 2, awayScore: 1 },
    { user: 'Parn', match: 3, homeScore: 1, awayScore: 1 },
    { user: 'Parn', match: 4, homeScore: 2, awayScore: 0 },
    { user: 'Parn', match: 5, homeScore: 3, awayScore: 1 },
    { user: 'Parn', match: 8, homeScore: 1, awayScore: 1 },
    { user: 'Parn', match: 6, homeScore: 2, awayScore: 0 },
    { user: 'Parn', match: 7, homeScore: 1, awayScore: 1 },
    { user: 'Parn', match: 9, homeScore: 0, awayScore: 2 },
    { user: 'Parn', match: 10, homeScore: 2, awayScore: 0 },
    { user: 'Parn', match: 11, homeScore: 3, awayScore: 0 },
    { user: 'Parn', match: 12, homeScore: 2, awayScore: 1 },
    { user: 'Parn', match: 13, homeScore: 1, awayScore: 2 },
    { user: 'Parn', match: 14, homeScore: 2, awayScore: 1 },
    { user: 'Ping', match: 1, homeScore: 2, awayScore: 0 },
    { user: 'Ping', match: 2, homeScore: 1, awayScore: 1 },
    { user: 'Ping', match: 3, homeScore: 2, awayScore: 1 },
    { user: 'Ping', match: 4, homeScore: 1, awayScore: 0 },
    { user: 'Ping', match: 5, homeScore: 1, awayScore: 1 },
    { user: 'Ping', match: 8, homeScore: 1, awayScore: 2 },
    { user: 'Ping', match: 6, homeScore: 1, awayScore: 0 },
    { user: 'Ping', match: 7, homeScore: 1, awayScore: 1 },
    { user: 'Ping', match: 9, homeScore: 1, awayScore: 1 },
    { user: 'Ping', match: 10, homeScore: 2, awayScore: 1 },
    { user: 'Ping', match: 11, homeScore: 3, awayScore: 0 },
    { user: 'Ping', match: 12, homeScore: 2, awayScore: 1 },
    { user: 'Ping', match: 13, homeScore: 1, awayScore: 1 },
    { user: 'Ping', match: 14, homeScore: 1, awayScore: 1 },
    { user: 'Pom', match: 1, homeScore: 3, awayScore: 0 },
    { user: 'Pom', match: 2, homeScore: 1, awayScore: 1 },
    { user: 'Pom', match: 3, homeScore: 2, awayScore: 1 },
    { user: 'Pom', match: 4, homeScore: 1, awayScore: 0 },
    { user: 'Pom', match: 5, homeScore: 1, awayScore: 0 },
    { user: 'Pom', match: 8, homeScore: 1, awayScore: 1 },
    { user: 'Pom', match: 6, homeScore: 1, awayScore: 0 },
    { user: 'Pom', match: 7, homeScore: 1, awayScore: 1 },
    { user: 'Pom', match: 9, homeScore: 1, awayScore: 0 },
    { user: 'Pom', match: 10, homeScore: 2, awayScore: 0 },
    { user: 'Pom', match: 11, homeScore: 3, awayScore: 0 },
    { user: 'Pom', match: 12, homeScore: 2, awayScore: 1 },
    { user: 'Pom', match: 13, homeScore: 1, awayScore: 1 },
    { user: 'Pom', match: 14, homeScore: 0, awayScore: 1 },
    { user: 'Ratch', match: 1, homeScore: 2, awayScore: 0 },
    { user: 'Ratch', match: 2, homeScore: 0, awayScore: 1 },
    { user: 'Ratch', match: 3, homeScore: 1, awayScore: 1 },
    { user: 'Ratch', match: 4, homeScore: 2, awayScore: 0 },
    { user: 'Ratch', match: 5, homeScore: 1, awayScore: 0 },
    { user: 'Ratch', match: 8, homeScore: 2, awayScore: 1 },
    { user: 'Ratch', match: 6, homeScore: 3, awayScore: 1 },
    { user: 'Ratch', match: 7, homeScore: 1, awayScore: 1 },
    { user: 'Ratch', match: 9, homeScore: 0, awayScore: 2 },
    { user: 'Ratch', match: 10, homeScore: 4, awayScore: 0 },
    { user: 'Ratch', match: 11, homeScore: 3, awayScore: 0 },
    { user: 'Ratch', match: 12, homeScore: 2, awayScore: 1 },
    { user: 'Ratch', match: 13, homeScore: 1, awayScore: 1 },
    { user: 'Ratch', match: 14, homeScore: 0, awayScore: 2 },
    { user: 'Sam', match: 1, homeScore: 1, awayScore: 0 },
    { user: 'Sam', match: 2, homeScore: 1, awayScore: 1 },
    { user: 'Sam', match: 3, homeScore: 1, awayScore: 1 },
    { user: 'Sam', match: 4, homeScore: 2, awayScore: 0 },
    { user: 'Sam', match: 5, homeScore: 0, awayScore: 0 },
    { user: 'Sam', match: 8, homeScore: 0, awayScore: 1 },
    { user: 'Sam', match: 6, homeScore: 1, awayScore: 0 },
    { user: 'Sam', match: 7, homeScore: 0, awayScore: 1 },
    { user: 'Sam', match: 9, homeScore: 0, awayScore: 1 },
    { user: 'Sam', match: 10, homeScore: 2, awayScore: 0 },
    { user: 'Sam', match: 11, homeScore: 3, awayScore: 0 },
    { user: 'Sam', match: 12, homeScore: 1, awayScore: 1 },
    { user: 'Sam', match: 13, homeScore: 1, awayScore: 0 },
    { user: 'Sam', match: 14, homeScore: 1, awayScore: 0 },
    { user: 'Sam', match: 15, homeScore: 2, awayScore: 1 },
    { user: 'Shon', match: 1, homeScore: 3, awayScore: 2 },
    { user: 'Shon', match: 2, homeScore: 1, awayScore: 1 },
    { user: 'Shon', match: 3, homeScore: 3, awayScore: 1 },
    { user: 'Shon', match: 4, homeScore: 1, awayScore: 1 },
    { user: 'Shon', match: 5, homeScore: 1, awayScore: 1 },
    { user: 'Shon', match: 8, homeScore: 1, awayScore: 2 },
    { user: 'Shon', match: 12, homeScore: 3, awayScore: 1 },
    { user: 'Shon', match: 13, homeScore: 1, awayScore: 1 },
    { user: 'Shon', match: 14, homeScore: 1, awayScore: 2 },
    { user: 'Shon', match: 15, homeScore: 2, awayScore: 2 },
    { user: 'Shon', match: 16, homeScore: 5, awayScore: 1 },
    { user: 'Shon', match: 17, homeScore: 1, awayScore: 1 },
    { user: 'Shon', match: 18, homeScore: 1, awayScore: 3 },
    { user: 'Shon', match: 19, homeScore: 1, awayScore: 3 },
    { user: 'Shon', match: 20, homeScore: 3, awayScore: 1 },
    { user: 'Shon', match: 21, homeScore: 1, awayScore: 1 },
    { user: 'Shon', match: 22, homeScore: 1, awayScore: 3 },
    { user: 'Shon', match: 23, homeScore: 2, awayScore: 1 },
    { user: 'Shon', match: 24, homeScore: 3, awayScore: 1 },
    { user: 'Shon', match: 25, homeScore: 1, awayScore: 2 },
    { user: 'Shon', match: 26, homeScore: 1, awayScore: 1 },
    { user: 'Shon', match: 27, homeScore: 3, awayScore: 1 },
    { user: 'Shon', match: 28, homeScore: 3, awayScore: 1 },
    { user: 'Shon', match: 29, homeScore: 1, awayScore: 1 },
    { user: 'Shon', match: 30, homeScore: 1, awayScore: 2 },
    { user: 'Shon', match: 31, homeScore: 1, awayScore: 2 },
    { user: 'Shon', match: 32, homeScore: 1, awayScore: 1 },
    { user: 'Shon', match: 33, homeScore: 1, awayScore: 2 },
    { user: 'Shon', match: 34, homeScore: 2, awayScore: 0 },
    { user: 'Shon', match: 35, homeScore: 1, awayScore: 3 },
    { user: 'Shon', match: 36, homeScore: 2, awayScore: 1 },
    { user: 'Shon', match: 37, homeScore: 2, awayScore: 0 },
    { user: 'Shon', match: 38, homeScore: 1, awayScore: 2 },
    { user: 'Shon', match: 39, homeScore: 2, awayScore: 1 },
    { user: 'Shon', match: 40, homeScore: 0, awayScore: 1 },
    { user: 'Shon', match: 41, homeScore: 1, awayScore: 2 },
    { user: 'Shon', match: 42, homeScore: 1, awayScore: 1 },
    { user: 'Shon', match: 43, homeScore: 1, awayScore: 2 },
    { user: 'Shon', match: 44, homeScore: 1, awayScore: 2 },
    { user: 'Shon', match: 45, homeScore: 1, awayScore: 2 },
    { user: 'Shon', match: 46, homeScore: 2, awayScore: 1 },
    { user: 'Shon', match: 47, homeScore: 1, awayScore: 2 },
    { user: 'Shon', match: 48, homeScore: 1, awayScore: 1 },
    { user: 'Son', match: 1, homeScore: 2, awayScore: 1 },
    { user: 'Son', match: 2, homeScore: 1, awayScore: 1 },
    { user: 'Son', match: 3, homeScore: 4, awayScore: 2 },
    { user: 'Son', match: 4, homeScore: 2, awayScore: 0 },
    { user: 'Son', match: 5, homeScore: 0, awayScore: 0 },
    { user: 'Son', match: 8, homeScore: 1, awayScore: 2 },
    { user: 'Son', match: 6, homeScore: 2, awayScore: 0 },
    { user: 'Son', match: 7, homeScore: 0, awayScore: 1 },
    { user: 'Son', match: 9, homeScore: 2, awayScore: 0 },
    { user: 'Son', match: 10, homeScore: 2, awayScore: 0 },
    { user: 'Son', match: 11, homeScore: 3, awayScore: 1 },
    { user: 'Son', match: 12, homeScore: 2, awayScore: 1 },
    { user: 'Son', match: 13, homeScore: 0, awayScore: 2 },
    { user: 'Son', match: 14, homeScore: 0, awayScore: 2 },
    { user: 'Yot', match: 1, homeScore: 4, awayScore: 1 },
    { user: 'Yot', match: 2, homeScore: 0, awayScore: 0 },
    { user: 'Yot', match: 3, homeScore: 2, awayScore: 1 },
    { user: 'Yot', match: 4, homeScore: 1, awayScore: 0 },
    { user: 'Yot', match: 5, homeScore: 1, awayScore: 0 },
    { user: 'Yot', match: 8, homeScore: 1, awayScore: 1 },
    { user: 'Yot', match: 6, homeScore: 2, awayScore: 0 },
    { user: 'Yot', match: 7, homeScore: 0, awayScore: 0 },
    { user: 'Yot', match: 9, homeScore: 0, awayScore: 2 },
    { user: 'Yot', match: 10, homeScore: 3, awayScore: 0 },
    { user: 'Yot', match: 11, homeScore: 3, awayScore: 1 },
    { user: 'Yot', match: 12, homeScore: 3, awayScore: 2 },
    { user: 'Yot', match: 13, homeScore: 0, awayScore: 2 },
    { user: 'Yot', match: 14, homeScore: 1, awayScore: 2 },
    { user: 'R', match: 1, homeScore: 3, awayScore: 1 },
    { user: 'R', match: 2, homeScore: 0, awayScore: 0 },
    { user: 'R', match: 3, homeScore: 1, awayScore: 0 },
    { user: 'R', match: 4, homeScore: 2, awayScore: 1 },
    { user: 'R', match: 5, homeScore: 0, awayScore: 0 },
    { user: 'R', match: 8, homeScore: 2, awayScore: 2 },
    { user: 'R', match: 6, homeScore: 3, awayScore: 2 },
    { user: 'R', match: 7, homeScore: 0, awayScore: 1 },
    { user: 'R', match: 9, homeScore: 1, awayScore: 0 },
    { user: 'R', match: 10, homeScore: 2, awayScore: 0 },
    { user: 'R', match: 11, homeScore: 5, awayScore: 1 },
    { user: 'R', match: 12, homeScore: 1, awayScore: 3 },
    { user: 'R', match: 13, homeScore: 1, awayScore: 2 },
    { user: 'R', match: 14, homeScore: 1, awayScore: 0 },
    { user: 'R', match: 15, homeScore: 3, awayScore: 1 },
    { user: 'R', match: 16, homeScore: 2, awayScore: 0 },
    { user: 'R', match: 17, homeScore: 0, awayScore: 2 }
    , function () {
        console.log('finished populating users');
      }
  );
});
*/
