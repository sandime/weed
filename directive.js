/**
 * Created by SHERRI on 4/23/15.
 */
var app = angular.module('myApp', []);
app.directive('walterwhite', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<h2>I am Heisenberg</h2>'
    };
});
