var app = angular.module("myapp", [
    "ui.router",
    "toastr",
    "app.controller",
    "app.directive",
    "app.server"
]);
//
// app.factory("loginStates", [function () {
//     return {
//         request: function (config) {
//
//             return config;
//         }
//     };
// }]);

app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", function ($stateProvider, $urlRouterProvider, $httpProvider) {
    // $httpProvider.interceptors.push("loginStates");
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state(
        "home", {
            "url": "/home",
            views: {
                "": {
                    templateUrl: "../my-web/angularWeb/templates/index.html"
                },
                "tabs@home": {
                    templateUrl: " ../my-web/angularWeb/templates/tabs.html"
                },
                "content@home": {
                    templateUrl: " ../my-web/angularWeb/templates/content.html",
                    controller: "contentController"
                }
            }
        }
    ).state(
        "login", {
            "url": "/login",
            views: {
                "": {
                    templateUrl: "../my-web/angularWeb/templates/login.html",
                    controller: "loginController"
                }
            }
        }
    )
        .state(
            "home.other", {
                "url": "/other",
                views: {
                    "content": {
                        templateUrl: "../my-web/angularWeb/templates/other.html"
                    }
                }
            })
        .state(
            "upload", {
                "url": "/upload",
                views: {
                    "": {
                        templateUrl: "../my-web/angularWeb/templates/upload.html",
                        controller: "uploadController"
                    }
                }
            })
        .state(
            "uploads", {
                "url": "/uploads", 
                views: {
                    "": {
                        templateUrl: "../my-web/angularWeb/templates/uploads.html",
                        controller: "uploadsController"
                    }
                }
            }
        )

}]);

