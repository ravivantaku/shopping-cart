angular.module("shopping-cart")
        .controller("ProductDetailsController", function($scope, $stateParams, productsService, $state) {
            // $scope.product = {"id": 1, "product_name": "Angular 1.x pdf book", "product_img": "images/angular1.png", "product_category": "Books", "product_price": 1000};
            console.log($stateParams);
            function findProductFromList() {
                productsService.getProduct(+$stateParams.productId).then(function(result){
                    $scope.product = result;
                }).catch(function(err){
                    console.log(err);
                });
              //  $scope.product = _.find(productsService.products, {id: +$stateParams.productId});
            }
            $scope.goToHome = function(){
                $state.go("home");
            };
            
            findProductFromList();
        });