(function () {

    angular
        .module('catalogCtrl', [])
        .controller('catalogCtrl', ['$scope', '$filter', '$stateParams', catalogCtrl])

        function catalogCtrl($scope, $filter, $stateParams) {
            
            $scope.catalog.$promise.then(function (response) {
                $scope.catalogDir = $filter('filter')(response, {id: $stateParams.id})[0];
            })
            
            $scope.ArticlesForPage = [];
            
            $scope.getArticlesForPage = function (item) {
                $scope.articles.$promise.then(function (response) {
                    for (var i = 0; i < response.length; i++) {
                        if (item.id == response[i].type) {
                            $scope.ArticlesForPage.push(response[i]);
                        }
                    }
                })
            };
            
        }

})();