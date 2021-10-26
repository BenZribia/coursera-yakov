(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', lunchCheckFunctionController)

        lunchCheckFunctionController.$inject = ['$scope'];
        function lunchCheckFunctionController($scope) {

            $scope.stringOfDishes = "";

            $scope.output = "";

            $scope.checkIfEmpty = function() {
                if ($scope.stringOfDishes == "" || $scope.stringOfDishes == " ") {
                    $scope.output="Please enter data first";
                } else {
                    checkIfTooMuch();
                }
            }

            let checkIfTooMuch = function() {
                const listOfDishes = $scope.stringOfDishes.split(',');
                if (listOfDishes.length <= 3) {
                    $scope.output = "Enjoy!";
                } else if(listOfDishes.length > 3) {
                    $scope.output = "Too much!";
                } 
            }
        };
})();