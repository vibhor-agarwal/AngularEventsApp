'use strict';

var createEventController = app.controller('CreateEventController',
    function ($scope, $log, eventDataService) {
        $scope.createEvent = function (event) {
            
        };

        $scope.submitForm = function (form, event) {
            if (!form.$invalid) {
                eventDataService.createEvent(event).then(
                    function (obj) {
                        window.location.href = "/web/events-app/views/events.html";
                    },
                    function (obj) {
                        $log.warn(obj)
                    }
                );
            }
            else {
                $log.warn(event);
            }            
        }
    }
);