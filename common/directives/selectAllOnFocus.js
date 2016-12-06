angular.module("slider-angular-app").directive('selectAllOnFocus',function() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
         template: '<textarea>Hello this is a textarea</textarea>',
        // templateUrl: '',
         replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
        	console.log("selectAllOnFocus linked");
            iElm.mouseup(function(event) {
                event.preventDefault();
            })
            iElm.focus(function() {
                iElm.select();
            })
        }
    };
});
