angular.module("shopping-cart")
        .service("productsService", function(){
           this.products =  [
      {"id": 1, "product_name": "Angular 1.x pdf book", "product_img": "images/angular1.png", "product_category": "Books", "product_price": 1000},
      {"id": 2,"product_name": "Iphone 7", "product_img": "images/Apple-iPhone-5s.jpg", "product_category": "Phones", "product_price": 50000},
      {"id": 3, "product_name": "Soney TV", "product_img": "images/soney.jpg", "product_category": "Television", "product_price": 45000}
    ];
        });