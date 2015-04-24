/**
 * Created by SHERRI on 4/24/15.
 */
var app= angular.module("isolateApp", []);
app.controller("AppCtrl", function($scope, $element){
    $scope.useMove = function (obj){
        console.log(obj);
    }
})
.directive("character", function(){
        return {
            restrict: "E",
            scope: {
                //gets the value @name and @image in html
                name:"@",
                image:"@"
            },
            templateUrl: 'partials/shield_isolate.html'
        }
    });