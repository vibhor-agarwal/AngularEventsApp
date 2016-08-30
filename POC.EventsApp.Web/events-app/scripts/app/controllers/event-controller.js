'use strict';

var eventController = app.controller('EventController',
    function ($scope, $log, eventDataService, $location) {

        var search = $location.search();
        var eventId = search.id ? search.id : 1;

        //remote data
        eventDataService.getEvent(eventId).then(
            function (obj) {
                $scope.event = obj.data;
            },
            function (obj) {
                $log.warn(obj);
            }
        );

        //local - defaults
        $scope.sortColumnsEventSessions = ['name', 'upVotesCount', 'downVotesCount'];
        $scope.selectedSortColumnEventSessions = 'name';
        $scope.sortOrderEventSessions = '-upVotesCount';        

        //functions
        $scope.upVoteEventSession = $.proxy((function (session) {
            session.upVotesCount++;
        }), $scope);
        $scope.downVoteEventSession = function (session) {
            session.downVotesCount++;
        };
    }
);