(function () {
    'use strict';

    angular.module("LunchCheck", [])
        .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ["$scope"];
    function LunchCheckController($scope) {
        $scope.itemList = "";
        $scope.showMessage = function () {
            //var trimItems = $scope.items.trim();
            if ($scope.itemList === "") {
                $scope.message = "Please enter data first";
            } else {
                var items = $scope.itemList.split(',');
                var itemCount = items.filter(function (item) {
                    return item.trim() !== "";
                }).length;

                if (itemCount <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                }
            }
        };
        $scope.message = "";
        $scope.changeTextColor = function () {
            if ($scope.message === "Enjoy!" || $scope.message === "Too much!") {
                return { "color": "green" };
            } else if ($scope.message === "Please enter data first") {
                return { "color": "red" };
            }
        };

        $scope.changeBorderColor = function () {
            if ($scope.message === "Enjoy!" || $scope.message === "Too much!") {
                return { "border-color": "green" };
            } else if ($scope.message === "Please enter data first") {
                return { "border-color": "red" };
            } else {
                return { "border-style": "none" };
            }
        };
    }
})();