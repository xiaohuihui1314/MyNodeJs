var app = angular.module("app.server", []);
app.factory("myServer", ["$http", "$q", function ($http, $q) {
    var defered = $q.defer();

    function handleRequest(data) {
        $http({
            method: "post",
            url: "/server",
            data: data
        }).success(function (data) {
            console.log(data)
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return defered.promise;
    }

    return {
        all: function (data) {
            return handleRequest(data);
        }
    }
}]).factory('fileReader', ["$q", "$log", function ($q, $log) {
    var onLoad = function (reader, deferred, scope) {
        return function () {
            scope.$apply(function () {
                deferred.resolve(reader.result);
            });
        };
    };
    var onError = function (reader, deferred, scope) {
        return function () {
            scope.$apply(function () {
                deferred.reject(reader.result);
            });
        };
    };
    var getReader = function (deferred, scope) {
        var reader = new FileReader();
        reader.onload = onLoad(reader, deferred, scope);
        reader.onerror = onError(reader, deferred, scope);
        return reader;
    };
    var readAsDataURL = function (file, scope) {
        var deferred = $q.defer();
        var reader = getReader(deferred, scope);
        reader.readAsDataURL(file);
        return deferred.promise;
    };
    return {
        readAsDataUrl: readAsDataURL
    };
}])