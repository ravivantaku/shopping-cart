angular.module("shopping-cart")
        .controller("HomeController", function($scope, productsService) {

            //$scope.products = productsService.products;
           productsService.getProducts().then(function(result){
                $scope.products =  result;
                productsService.saveProduct();
           }).catch(function(error){
               console.log(error);
           });
            $scope.selectedProducts = [];
            $scope.buyProduct = function(item) {
                console.log("before select product", $scope.selectedProducts);
                $scope.selectedProducts.push(item);
                console.log($scope.selectedProducts);
            };
            $scope.bought = function(productId) {
                var item = _.find($scope.selectedProducts, {id: productId});
                return !_.isEmpty(item);
            };

//                    $scope.firstName = "js";
//            $scope.isCountrySeleted = false;
////              $scope.countries = ["India", "US", "UK"];
//              $scope.countries = [{country: "India", id: 1},{country: "US", id: 2},{country: "UK", id: 3}];
//              $scope.countryChange = function(){
//                  $scope.isCountrySeleted = true;
//              };
//            $scope.registerInfo = function(){
////                var user = {firstname: $scope.firstName,lastname:$scope.lastName,
////                username: $scope.username, password: $scope.password, confirpassowrd: $scope.confirmPassword,
////                  country: $scope.country};
//                  console.log($scope.register);
//                  
//            };
        });