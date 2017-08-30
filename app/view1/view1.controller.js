angular.module('myApp.view1')
    .controller('View1Ctrl', ['$scope','Shop',function($scope, Shop) {
    $scope.home="home";

        $scope.addItem=function (item) {
            Shop.addOrder(item);
        };
        $scope.phones=[];
    Shop.getAllItems().then(function (_items) {
        $scope.phones=_items;
    });
}]);