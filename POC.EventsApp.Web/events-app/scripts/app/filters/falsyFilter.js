'use strict'

var ifNAFilter = app.filter('ifNA', function () {
    return function (input, defaultValue) {
        if (angular.isUndefined(input) || input == null) {
            return defaultValue;
        }
        return input;
    };
});

var lengthFilter = app.filter('length', function () {
    return function (input, defaultValue) {
        if (angular.isUndefined(input) || input == null || !Array.isArray(input)) {
            return defaultValue;
        }
        return input,length;
    };
});

var lengthFilter = app.filter('lengthPositive', function () {
    return function (input, defaultValue) {
        if (angular.isUndefined(input) || input == null || !Array.isArray(input) || input.length == 0) {
            return defaultValue;
        }
        return input.length;
    };
});

