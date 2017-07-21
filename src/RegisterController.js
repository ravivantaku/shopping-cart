angular.module("shopping-cart")
        .controller("RegisterController", function($scope, $http) {
            $scope.register = {};
            $scope.isCountrySeleted = false;
//              $scope.countries = ["India", "US", "UK"];
            $scope.countries = [{country: "India", id: 1}, {country: "US", id: 2}, {country: "UK", id: 3}];
            $scope.countryChange = function() {
                $scope.isCountrySeleted = true;
            };
            $scope.registerInfo = function() {
                console.log($scope.register);
                $http({
                    url: "http://localhost:3000/users",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: $scope.register
                }).then(function(res) {
                    console.log(res);
                }).catch(function(error) {
                    console.log(error);
                });
            };
        });