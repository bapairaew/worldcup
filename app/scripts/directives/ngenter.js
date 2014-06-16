'use strict';

angular.module('worldcupApp')

  .directive('ngEnter', function () {
    return {
      link: function (scope, element, attrs) {
        element.bind('blur', function (event) {
          scope.$apply(function () {
            scope.$eval(attrs.ngEnter);
          });

          event.preventDefault();
        });
      }
    };
  });
