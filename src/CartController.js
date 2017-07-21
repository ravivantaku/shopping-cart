angular.module("shopping-cart")
        .controller("CartController", function($scope, cartService) {
            $scope.cartItems = cartService.getCartItems();
            $scope.total = cartService.total;
            $scope.hideButton = true;
            $scope.$watch("cartItems", function() {
                var checkedList = _.filter($scope.cartItems, function(cart) {
                    return cart.isChecked === true;
                });

                if (checkedList.length) {
                    $scope.hideButton = false;
                }
                else {
                    $scope.hideButton = true;
                }
            }, true);
        });