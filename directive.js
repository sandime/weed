/**
 * Created by SHERRI on 4/23/15.
 */
var app = angular.module('myApp', []);
app.directive('restrictions', function(){
    return {
        restrict: 'A',
        link: function()
        {
            console.log('i am an attribute')
        }
    }
})
//note interactiveBtn is used with a dash in the dom, but interpreted like this in js
.controller('ShieldCtrl', function($scope){
    $scope.shieldNames = [];
    this.addReigns = function ()
    {
        $scope.shieldNames.push("Roman: Juggernaut");
    };
    this.addRollins = function ()
    {
        $scope.shieldNames.push("Rollins: Architect");
    };
    this.addAmbrose = function ()
    {
        $scope.shieldNames.push("Ambrose: Lunatic Fringe");
    };
})
.directive('theshield', function(){
    return {
        restrict: 'E',
        //add scope to isolate the scope
        scope: {},
        controller: "ShieldCtrl",
        link: function (scope, element, attrs)
    {
        element.bind('mouseenter', function(){
            console.log(scope.shieldNames)
        });
    }
    }
})
    //add reigns

    .directive('reigns',function ()
    {
      return {
          require: "theshield",
          link: function(scope,element, attrs, ShieldCtrl)
          {
              ShieldCtrl.addReigns();
          }
      }
    })

    //add rollins
    .directive('rollins',function ()
    {
        return {
            require: "theshield",
            link: function(scope,element, attrs, ShieldCtrl)
            {
                ShieldCtrl.addRollins();
            }
        }
    })

    //add ambrose

    .directive('ambrose',function ()
    {
        return {
            require: "theshield",
            link: function(scope,element, attrs, ShieldCtrl)
            {
                ShieldCtrl.addAmbrose();
            }
        }
    })
    //button

.directive('interactiveBtn', function ()
{
    return {
        restrict: 'A',
        link: function (scope, element, attrs)
        {
            element.bind('mouseenter', function ()
            {
                element[0].innerText = "Rolled Over";
            });

            element.bind('mouseleave', function ()
            {
                element[0].innerText = "Rolled Out";
            });
        }
    }
})

    .directive('walterwhite', function ()
    {
        return {
            restrict: 'E',
            transclude: true,
            link: function (scope, element, attrs)
            {
                console.log(scope);
                console.log(element);
                console.log(attrs);
            }
        };
        /*return {
         restrict: 'E',
         transclude: true,
         template: '<h2>I am Heisenberg</h2>'
         }*/
    });