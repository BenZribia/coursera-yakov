(function () {
    'use-strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems);

    function FoundItems() {
        let ddo = {
            restrict: "E",
            templateUrl: 'found-items.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
        
    }

    NarrowItDownController.$inject = ['MenuSearchService']
    function NarrowItDownController (MenuSearchService) {
        this.searchItem = '';

        this.found = [];

        this.narrowIt = () => {
            MenuSearchService.getMatchedMenuItems()
                            .then(function (result) {
                                return result.data.menu_items;  
                            })
                            .then((foundItems) => {
                                this.found = foundItems.filter( elt => elt.description.includes(this.searchItem));
                                console.log(this.found)
                            });
        };

        this.removeItem = (itemIndex) => {
            this.found.splice(itemIndex, 1);
        };
    };

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        
        this.getMatchedMenuItems = function () {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
                }
            )
        };
    };

})();
