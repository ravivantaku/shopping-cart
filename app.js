angular.module("shopping-cart", ["ui.router"]);

angular.module("shopping-cart")
        .controller("AboutController", function($scope){
            $scope.name = "About";
        })
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("about\n\
\n\
");
            $stateProvider.state("home", {
                url: "/home",
               // template: "<h3>This is Home route</h3>"
                templateUrl: "home.html",
                controller: function($scope){
                    $scope.name = "Home route";
                }
            })
             .state("about", {
                 url: "/about",
                  template: "<h3>{{name}}</h3>",
                  controller: "AboutController"
             });
        });