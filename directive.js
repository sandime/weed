/**
 * Created by SHERRI on 4/23/15.
 */
var app = angular.module('myApp', []);
//note interactiveBtn is used with a dash in the dom, but interpreted like this in js
app.directive("interactiveBtn", function(){

}) //chain by deleting app below and the semicolon here

.directive('walterwhite', function() {
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
