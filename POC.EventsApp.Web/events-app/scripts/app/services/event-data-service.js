'use strict';

app.factory('eventDataService', function ($http, $log) {

    return {
        getEvent: function (id) {
            return $http({
                method: 'GET',
                url: ['/api/event', id].join('/')
            });
        },
        getEvents: function(){
            return $http({
                method: 'GET',
                url: '/api/event'
            });
        },
        saveEvent: function () {
            return $http({
                method: 'PUT',
                url: '/api/event'
            });
        },
        createEvent: function (event) {
            return $http({
                method: 'POST',
                url: '/api/event/0',
                data: event
            });
        }
    };
});
