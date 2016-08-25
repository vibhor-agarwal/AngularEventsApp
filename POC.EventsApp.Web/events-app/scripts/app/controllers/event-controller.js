'use strict';

var eventController = app.controller('EventController',
    function ($scope, $log, eventDataService) {
        $scope.sortColumnsEventSessions = ['name', 'upVotesCount', 'downVotesCount'];
        $scope.selectedSortColumnEventSessions = 'name';
        $scope.sortOrderEventSessions = '-upVotesCount';
        eventDataService.getEvent().then(
            function (obj) {
                $scope.event = obj.data;
            },
            function (obj) {
                $log.warn(obj);
            }
        );

        $scope.upVoteEventSession = $.proxy((function (session) {
            session.upVotesCount++;
        }), $scope);

        $scope.loading = false;
        $scope.downVoteEventSession = function (session) {
            session.downVotesCount++;
        };
    }
);