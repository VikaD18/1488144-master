angular.module('shop', [] )
    .service('Shop', ['$http','$q','Phone',function ($http,$q,Phone)  {
        var orders=[];
        var items=[];
        function Shop() {
            console.log('constructor') ;
        }
        Shop.prototype.getOrders=function() {
         return orders;
         };
         Shop.prototype.addOrders=function(order) {
         return orders.push(order);
         };
        Shop.prototype.getAllItems=function () {
            if(items.length){
                return $q(function(resolve, reject) {
                    resolve(items);
                });
            }
            return $http({
                method: 'GET',
                url: 'data/phone.json'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                items=response.data;
                return items.map(function (item) {
                    return new Phone(item.title,item.text, item.color, item.price, item.image)
                });
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
           console.error(response);
            });


            };
    return new Shop();
    }])
    .factory('Phone', [function() {
    function Phone(title,text,color, price, image) {
        this.title=title;
        this.text=text;
        this.color=color;
        this.price=price;
        this.image=image;
    }
    return Phone;
}]);