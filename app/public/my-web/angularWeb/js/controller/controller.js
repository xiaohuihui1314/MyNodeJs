var app = angular.module("app.controller", []);

app.controller("myController", ["$scope", "myServer", function ($scope, myServer) {
    this.myClick = function () {
        $scope.data = {
            name: $scope.name,
            password: $scope.password
        };
        myServer.all($scope.data).then(function (data) {
            console.log(data)
        })
    }
}])
    .controller("contentController", ["$scope", function ($scope) {
        $scope.submitForm = function (isValid) {
            console.log(isValid);
        };
        $scope.name = "我的表单！";
        $scope.userType = "guest";
    }])
    .controller("uploadController", ["$scope","$http","toastr", "fileReader", function ($scope,$http,toastr,fileReader) {
        toastr.success('Hello world!');
        $scope.getFile = function () {
            fileReader.readAsDataUrl($scope.file, $scope)
                .then(function (result) {
                    $scope.imageSrc = result;
                });
        };
        $scope.upload = function () {
            var fd = new FormData();
            console.log( $scope.file);
            fd.append("imageFile", $scope.file);
            console.log(fd);
           $http({
               method:"post",
               url:"/upload",
               data:fd,
               transformRequest: angular.identity,
               headers: {'Content-Type': undefined}
           }).success(function (data) {
               console.log(data)
           });
        }
    }])
    .controller("uploadsController", ["$scope", "$http", function ($scope, $http) {
        $scope.filesChanged = function (elm) {
            $scope.files = elm.files;
            console.log($scope.files)
            $scope.$apply();
        }
        $scope.upload = function () {
            var fd = new FormData();
            console.log( $scope.files);
            angular.forEach($scope.files, function(val, key) {
                fd.append(key, val);
            });
            console.log(fd);
            $http({
                method:"post",
                url:"/uploads",
                data:fd,
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).success(function (data) {
                console.log(data)
            });
        }

    }]);

