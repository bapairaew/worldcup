'use strict';

angular.module('worldcupApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
