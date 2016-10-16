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
    }
})();