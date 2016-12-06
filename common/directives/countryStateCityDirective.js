app = angular.module('slider-angular-app');
app.directive('myCountry', [function($http) {
    return {
        priority: 0,
        restrict: 'E',
        replace: true,
        template: '<select name="country_id"  ng-change="get_states(country_id)"  ng-options="country.id as country.country_name for country in countries"  required></select>',
        controller: function($scope, $element, $attrs, $transclude, $http) {
            $scope.countries = [{ id: null, country_name: "Select country" }];
            $scope.state_id = null;
            $scope.city_id = null;
            $scope.states = [{ id: null, state_name: "Select state" }];
            $scope.cities = [{ id: null, city_name: "Select City" }];
            console.log($attrs.ngModel);
            $http.get($attrs.resource).success(function(data) {
                $scope.countries = $scope.countries.concat(data);
                $scope.mycountry = null;
            });

            $scope.get_states = function($key) {
                $scope.state_id = null;
                $scope.city_id = null;
                $scope.states = [{ id: null, state_name: "Select state" }];
                $scope.cities = [{ id: null, city_name: "Select City" }];
            };

        },
        link: function(scope, iElement, iAttrs) {

        }
    };
}]);
app.directive('myState', [function() {
    return {
        restrict: 'E',
        template: '<select name="state_id" class="form-control" ng-options="state.id as state.state_name for state in states"></select>',
        controller: function($scope, $element, $attrs, $transclude, $http) {

            $scope.$watch('country_id', function(newValue, oldValue) {
                $scope.cities = [{ id: null, city_name: "Select City" }];
                $scope.city_id = null;
                if (newValue) {
                    $http.get($attrs.resource + "?country_id="+newValue).success(function(data) {
                        $scope.states = $scope.states.concat(data);
                        $scope.state_id = null;
                    });
                }
            });
        },
        replace: true,
        link: function(scope, iElement, iAttrs) {
            scope.states = [{ id: null, state_name: "Select state" }];
        }
    };
}]);
app.directive('myCity', [function() {
    return {
        restrict: 'E',
        template: '<select name="city_id"  ng-options="city.id as city.city_name for city in cities"  required></select>',
        replace: true,
        controller: function($scope, $element, $attrs, $transclude, $http) {
            $scope.$watch('state_id', function(newValue, oldValue) {
                if (newValue) {
                    $http.get($attrs.resource + "?state_id="+ newValue).success(function(data) {
                        $scope.cities = $scope.cities.concat(data);
                        $scope.city_id = null;
                    });
                }
            });
        },
        link: function(scope, iElement, iAttrs) {
            scope.cities = [{ id: null, city_name: "Select City" }];
        }
    };
}]);
