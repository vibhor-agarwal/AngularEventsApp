'use strict';

var eventController = app.controller('EventController',
    function ($scope) {
        $scope.sortColumnsEventSessions = ['name', 'upVotesCount', 'downVotesCount'];
        $scope.selectedSortColumnEventSessions = 'name';
        $scope.sortOrderEventSessions = '-upVotesCount';
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/2/2016',
            time: '1:30 am',
            location: {
                address: 'Markit India',
                city: 'Noida',
                province: 'UP'
            },
            imageUrl: 'https://angular.io/resources/images/logos/standard/shield-large.png',
            sessions: [
                {
                    name: 'Directive MasterClass Advanced',
                    creatorName: 'Vibhor Agarwal',
                    duration: '1 hr',
                    level: 'Introductory',
                    abstract: 'In this sessions, you will learn in adn out of directives.',
                    upVotesCount: 0,
                    downVotesCount: 0
                },
                {
                    name: 'Scopes',
                    creatorName: 'Vibhor Agarwal',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this sessions, you will learn in adn out of directives.',
                    upVotesCount: 0,
                    downVotesCount: 0
                },
                {
                    name: 'Controllers',
                    creatorName: 'Vibhor Agarwal',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this sessions, you will learn in adn out of directives.',
                    upVotesCount: 0,
                    downVotesCount: 0
                }
            ]
        };
        $scope.upVoteEventSession = $.proxy((function (session) {
            session.upVotesCount++;
        }), $scope);

        $scope.downVoteEventSession = function (session) {
            session.downVotesCount++;
        };
    }
);
