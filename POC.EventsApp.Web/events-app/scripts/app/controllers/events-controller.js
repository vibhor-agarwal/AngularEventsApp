'use strict';

var eventsController = app.controller('EventsController',
    function ($scope, $log, eventDataService) {

        eventDataService.getEvents().then(
            function (obj) {
                $scope.events = obj.data;
            },
            function (obj) {
                $log.warn(obj);
            }
        );
    }
);
