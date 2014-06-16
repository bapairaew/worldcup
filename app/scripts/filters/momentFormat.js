'use strict';

angular.module('worldcupApp')

  /**
   * Removes server error when user updates input
   */
  .filter('momentFormat', function ($window) {
    return function (input, format) {
      return $window.moment ? $window.moment(input).format(format) : input;
    };
  });
