angular.module("shopping-cart")
        .service("productsService", function($http) {
            this.products = [
                {"id": 1, "product_name": "Angular 1.x pdf book", "product_img": "images/angular1.png", "product_category": "Books", "product_price": 1000},
                {"id": 2, "product_name": "Iphone 7", "product_img": "images/Apple-iPhone-5s.jpg", "product_category": "Phones", "product_price": 50000},
                {"id": 3, "product_name": "Soney TV", "product_img": "images/soney.jpg", "product_category": "Television", "product_price": 45000}
            ];
            this.getProduct = function(productId){
                return $http({
                    url: "http://localhost:3000/products/" + productId,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function(result){
                    return result.data;
                }).catch(function(error){
                    return error.satus;
                });
            };
            this.getProducts = function() {
//                return $http.get("http://localhost:3000/products", {"Content-Type": "application/json"})
//                        .then(function(result) {
//                            console.log(result);
//                            return result.data;
//                        }).catch(function(error) {
//                    console.log(error);
//                    return error.status;
//                });
                
                return $http({
                    url: "http://localhost:3000/products",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function(result){
                    return result.data;
                }).catch(function(error){
                    return error.satus;
                });
            };
            
            this.saveProduct = function(){
                $http({
                    url: "http://localhost:3000/products",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data:  this.products[0]
                }).then(function(result){
                    console.log("post is success", result);
                    //return result.data;
                }).catch(function(error){
                    return error.satus;
                });
            };

            //this.getProducts = getProducts;
        });