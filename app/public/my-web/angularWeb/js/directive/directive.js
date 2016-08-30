var app = angular.module("app.directive", []);
app.directive("hello", function () {
    return {
        restrict: "EA",
        template: "<h1>欢迎来到angular！</h1>",
    }
})
    .directive("bbb", function () {
    return {
        restrict: "EA",
        scope:{
            state:"@"
        },
        link:function(scope,element,attrs){
            scope.state=attrs.state;
         
        }
    }
})
    .directive('fileModel', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;
                element.bind('change', function (event) {
                    scope.$apply(function () {
                        modelSetter(scope, element[0].files[0]);
                    });
                    //附件预览
                    scope.file = (event.srcElement || event.target).files[0];
                    scope.getFile();
                });
            }
        };
    }]).directive('fileInput', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs) {
            elm.bind('change', function () {
                $parse(attrs.fileInput)
                    .assign(scope, elm[0].files)
                $scope.$apply()
            })
        }
    }
}])
