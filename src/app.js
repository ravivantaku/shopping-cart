angular.module("shopping-cart", ["ui.router"]);

angular.module("shopping-cart")
        .controller("AboutController", function($scope){
            $scope.name = "About";
        })
                .controller("HomeController", function($scope){
                    $scope.firstName = "js";
            $scope.isCountrySeleted = false;
//              $scope.countries = ["India", "US", "UK"];
              $scope.countries = [{country: "India", id: 1},{country: "US", id: 2},{country: "UK", id: 3}];
              $scope.countryChange = function(){
                  $scope.isCountrySeleted = true;
              };
            $scope.registerInfo = function(){
//                var user = {firstname: $scope.firstName,lastname:$scope.lastName,
//                username: $scope.username, password: $scope.password, confirpassowrd: $scope.confirmPassword,
//                  country: $scope.country};
                  console.log($scope.register);
                  
            };
                })
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("about\n\
\n\
");
            $stateProvider.state("home", {
                url: "/home",
               // template: "<h3>This is Home route</h3>"
                templateUrl: "home.html",
                controller: "HomeController"
            })
             .state("about", {
                 url: "/about",
                  template: "<h3>{{name}}</h3>",
                  controller: "AboutController"
             });
        });