(function() {

'use strict';

angular.module('exchangeApp', [])

.config(['$httpProvider', function($httpProvider) {
    if (!$httpProvider.defaults.headers.common) {
        $httpProvider.defaults.headers.common = {};
    }
    $httpProvider.defaults.headers.common["Cache-Control"] = "no-cache";
    $httpProvider.defaults.headers.common.Pragma = "no-cache";
    $httpProvider.defaults.headers.common["If-Modified-Since"] = "0";
}]);

}) ();