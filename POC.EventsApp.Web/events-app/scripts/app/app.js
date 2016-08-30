'use strict';

var app = angular.module('eventsApp', ['ngRoute']);

app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
});
