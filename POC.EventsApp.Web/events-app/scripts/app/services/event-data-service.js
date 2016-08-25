'use strict';

app.factory('eventDataService', function ($http, $log) {

    return {
        getEvent: function() {
            return $http({
                method: 'GET',
                url: '/api/event/1'
            });
        },
        saveEvent: function () {
            return $http({
                method: 'POST',
                url: '/api/event/5'
            });
        }
    };
});
