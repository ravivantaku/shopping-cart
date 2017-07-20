angular.module("shopping-cart")
        .controller("RegisterController", function($scope, $http){
            $scope.register = {};
    $scope.registerInfo = function(){
        console.log($scope.register);
        $http({
            url: "http://localhost:3000/users",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: $scope.register
        }).then(function(res){
            console.log(res);
        }).catch(function(error){
            console.log(error);
        });
    };
        });