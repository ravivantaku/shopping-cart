//Without named views
////angular.module("shopping-cart", ["ui.router"]);
//
//angular.module("shopping-cart")
//        .controller("AboutController", function($scope) {
//            $scope.name = "About";
//        })
//        .config(function($stateProvider, $urlRouterProvider) {
//            $urlRouterProvider.otherwise("home");
//            $stateProvider.state("home", {
//                url: "/home",
//                templateUrl: "home.html",
//                controller: "HomeController"
//            })
//                    .state("productDetails", {
//                        url: "/prodcutDetails/:productId",
//                        templateUrl: "product_details.html",
//                        controller: "ProductDetailsController"
//                    })
//                    .state("cart", {
//                        url: "/cart",
//                        templateUrl: "cart.html",
//                        controller: "CartController"
//                    })
//                     .state("register", {
//                        url: "/register",
//                        templateUrl: "Register.html",
//                        controller: "RegisterController"
//                    })
//                    .state("about", {
//                        url: "/about",
//                        template: "<h3>{{name}}</h3>",
//                        controller: "AboutController"
//                    });
//        });

angular.module("shopping-cart", ["ui.router"]);

angular.module("shopping-cart")
        .controller("AboutController", function($scope) {
            $scope.name = "About";
        })
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("login");
            $stateProvider.state("login", {
                url: "/login",
                views: {
                    navbar: {
                        templateUrl: undefined,
                        controller: undefined
                    },
                    content: {
                        templateUrl: "Login.html",
                        controller: "LoginController"
                    }
                }
            }).state("home", {
                url: "/home",
                views: {
                    navbar: {
                        templateUrl: "nav.html",
                        controller: "NavbarController"
                    },
                    content: {
                        templateUrl: "home.html",
                        controller: "HomeController"
                    }
                }
            })
                    .state("productDetails", {
                        url: "/prodcutDetails/:productId",
                        views: {
                            navbar: {
                                templateUrl: "nav.html",
                                controller: "NavbarController"
                            },
                            content: {
                                templateUrl: "product_details.html",
                                controller: "ProductDetailsController"
                            }
                        }
                    })
                    .state("cart", {
                        url: "/cart",
                        views: {
                            navbar: {
                                templateUrl: "nav.html",
                                controller: "NavbarController"
                            },
                            content: {
                                templateUrl: "cart.html",
                                controller: "CartController"
                            }
                        }

                    })
                    .state("register", {
                        url: "/register",
                        views: {
                            navbar: {
                                templateUrl: "nav.html",
                                controller: "NavbarController"
                            },
                            content: {
                                templateUrl: "Register.html",
                                controller: "RegisterController"
                            }
                        }

                    })
                    .state("about", {
                        url: "/about",
                        views: {
                            navbar: {
                                templateUrl: "nav.html",
                                controller: "NavbarController"
                            },
                            content: {
                                template: "<h3>{{name}}</h3>",
                                controller: "AboutController"
                            }
                        }

                    });
        });