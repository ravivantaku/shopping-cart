angular.module("shopping-cart", ["ui.router"]);

angular.module("shopping-cart")
        .controller("AboutController", function($scope) {
            $scope.name = "About";
        })
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("home");
            $stateProvider.state("home", {
                url: "/home",
                templateUrl: "home.html",
                controller: "HomeController"
            })
                    .state("productDetails", {
                        url: "/prodcutDetails/:productId",
                        templateUrl: "product_details.html",
                        controller: "ProductDetailsController"
                    })
                    .state("cart", {
                        url: "/cart",
                        templateUrl: "cart.html",
                        controller: "CartController"
                    })
                     .state("register", {
                        url: "/register",
                        templateUrl: "Register.html",
                        controller: "RegisterController"
                    })
                    .state("about", {
                        url: "/about",
                        template: "<h3>{{name}}</h3>",
                        controller: "AboutController"
                    });
        });