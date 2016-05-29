(function () {

    angular
        .module('indexCtrl', [])
        .constant('activeCategory', "btn-primary")
        .controller('indexCtrl', ['$scope', 'articlesProvider', 'catalogProvider', 'activeCategory', indexCtrl]);
    
            function indexCtrl($scope, articlesProvider, catalogProvider, activeCategory) {

                $scope.articles = articlesProvider.getArticles();
                $scope.catalog = catalogProvider.getCatalog();

                var selectedCategory = null;

                $scope.selectCategory = function (newCategory) {
                    selectedCategory = newCategory;
                };
                $scope.getCategoryClass = function (category) {
                    return selectedCategory == category ? activeCategory : "";
                };

            }

})();