angular.module("shopping-cart")
        .controller("HomeController", function($scope, productsService, cartService) {

            //$scope.products = productsService.products;
           productsService.getProducts().then(function(result){
                $scope.products =  result;
                productsService.saveProduct();
           }).catch(function(error){
               console.log(error);
           });
           // $scope.selectedProducts = [];
            $scope.buyProduct = function(item) {
              cartService.addCartItems(item);
                //$scope.selectedProducts.push(item);
            };
            $scope.bought = cartService.bought;
//            $scope.bought = function(productId) {
//                var item = _.find($scope.selectedProducts, {id: productId});
//                return !_.isEmpty(item);
//            };

        });