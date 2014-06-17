'use strict';

angular.module('worldcupApp')

  .directive('ngEnter', function () {
    return {
      link: function (scope, element, attrs) {
        element.bind('blur keydown', function (event) {
          if (event.type === 'blur' || event.which === 13) {
            scope.$apply(function () {
              scope.$eval(attrs.ngEnter);
            });

            event.preventDefault();
          }
        });
      }
    };
  });
