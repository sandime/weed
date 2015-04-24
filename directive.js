/**
 * Created by SHERRI on 4/23/15.
 */
var app = angular.module('myApp', []);

app.directive('walterwhite', function() {
    return {
        restrict: 'E',
        transclude: true,
        //scope, element, attrs can be called anything, but always have the value of what they're named
        link: function(scope, element, attrs)
        {
            //look at the console to see these
            console.log(scope);
            console.log(element);
            console.log(attrs);
        }
    };
});
