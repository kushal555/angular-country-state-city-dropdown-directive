/*<div class="container slider">
    <img ng-repeat="slide in slides" class="slide slide-animation" ng-hide="!isCurrentSlideIndex($index)" ng-src="{{slide.image}}">
    <a class="arrow prev" href="#" ng-click="nextSlide()"></a>
    <a class="arrow next" href="#" ng-click="prevSlide()"></a>
    <nav class="nav">
        <div class="wrapper">
            <ul class="dots">
                <li class="dot" ng-repeat="slide in slides">
                    <a href="#" ng-class="{'active':isCurrentSlideIndex($index)}" ng-click="setCurrentSlideIndex($index);">{{slide.description}}</a></li>
            </ul>
        </div>
    </nav>
</div>*/

/**
 * @param  {[type]}
 * @param  {[type]}
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */
angular.module("slider-angular-app").directive('mySlider', [function() {
    return {
        priority: 0,
        //template: '<div></div>',
        templateUrl: './common/template/slider-template.html',
        replace: true,
        transclude: true,
        restrict: 'AE',
        scope: {
            sliderImages: "=images"
        },
        controller: function($scope, $element, $attrs, $transclude) {
            $scope.currentIndex = 0;
            $scope.setCurrentSlideIndex = function(index) {
                $scope.currentIndex = index;
            };
            $scope.isCurrentSlideIndex = function(index) {
                return $scope.currentIndex === index;
            };


            $scope.prevSlide = function() {
                $scope.currentIndex = ($scope.currentIndex < $scope.sliderImages.length - 1) ? ++$scope.currentIndex : 0;
            };
            $scope.nextSlide = function() {
                $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.sliderImages.length - 1;
            };
        },
        compile: function compile(tElement, tAttrs, transclude) {
            return {
                pre: function preLink(scope, element, attributes) {
                    // console.log(scope.images);
                },
                post: function postLink(scope, element, attributes) {

                }
            };
        }
    };
}])
