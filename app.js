var app = angular.module("slider-angular-app", [
    'ngAnimate'
]);

app.controller("rootCtrl", ['$rootScope', '$scope', function($rootScope, $scope) {

    $scope.textSelector = "hello this is a temp";

   
    $scope.country_id = $scope.state_id = $scope.city_id = null;

    $scope.slides = [
        { image: 'assets/images/image1.jpg', description: 'Image 00' },
        { image: 'assets/images/image2.jpg', description: 'Image 01' },
        { image: 'assets/images/image3.jpg', description: 'Image 02' },
        { image: 'assets/images/image1.jpg', description: 'Image 03' },
        { image: 'assets/images/image2.jpg', description: 'Image 04' }
    ];

    $scope.getAlldata = function(){
    	console.log($scope);
    }


}]);
app.animation('.slide-animation', function() {
    return {
        addClass: function(element, className, done) {
            if (className == 'ng-hide') {
                TweenMax.to(element, 0.5, { left: -element.parent().width(), onComplete: done });
            } else {
                done();
            }
        },
        removeClass: function(element, className, done) {
            if (className == 'ng-hide') {
                element.removeClass('ng-hide');
                TweenMax.set(element, { left: element.parent().width() });
                TweenMax.to(element, 0.5, { left: 0, onComplete: done });
            } else {
                done();
            }
        }
    };
});
