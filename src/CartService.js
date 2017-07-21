angular.module("shopping-cart")
        .service("cartService", [function() {
                var self = this;
                this.items = [];
                this.addCartItems = function(item){
                    this.items.push(item);
                };
                this.getCartItems = function(){
                    return self.items;
                };
                this.bought = function(productId) {
                    var item = _.find(self.items, {id: +productId});
                    return !_.isEmpty(item);
//                    var list = _.filter(self.items, function(item) {
//                        return item.id === +id;
//                    });
//                    return list.length > 0 ? true : false;
                };
                this.total = function() {
                    return _.reduce(self.items, function(acc, item) {
                        acc = acc + (item.productPrice * item.quantity);
                        return acc;
                    }, 0);
                };
            }]);