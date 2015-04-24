/**
 * Created by SHERRI on 4/24/15.
 */
var app= angular.module("isolateApp", []);
app.controller("AppCtrl", function($scope, $element){
    $scope.useMove = function (obj){
        console.log(obj);
    };
    $scope.movetypes=["Finisher", "Offensive Move", "Defensive Move"];
    $scope.movetype =$scope.movetypes[0];
})
.directive("character", function(){
        return {
            restrict: "E",
            scope: {
                //gets the value @name and @image in html
                name:"@",
                image:"@",
                movetype: "="
            },
            templateUrl: 'shield_isolate.html'
        }
    });