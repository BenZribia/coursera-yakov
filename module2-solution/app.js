(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

function ShoppingListCheckOffService() {
    let service = this;

    let bought = [];

    let toBuy = [
        { name: "cookies", quantity: 10 },
        { name: "chocolat", quantity: 9 },
        { name: "farina", quantity: 7 },
        { name: "bread", quantity: 4 },
        { name: "milk", quantity: 5 }
    ];

    service.getBoutghtItems = function () {
        return bought;
    };

    service.getToBuyItems = function () {
        return toBuy;
    };

    service.addToBought = function (item) {
        toBuy.splice(toBuy.indexOf(item), 1);
        bought.push(item);
    };
}

ToBuyController.$inject(ShoppingListCheckOffService)
function ToBuyController(ShoppingListCheckOffService) {
    let tbc = this;

    tbc.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

    tbc.checkOf = function (item) {
        ShoppingListCheckOffService.addToBought(item);
        console.log(bought);
    };
    
}

AlreadyBoughtController.$inject(ShoppingListCheckOffService)
function AlreadyBoughtController(ShoppingListCheckOffService) {
    let abc = this;

    abc.boughtItems = ShoppingListCheckOffService.getBoutghtItems();
    
    
}

})();