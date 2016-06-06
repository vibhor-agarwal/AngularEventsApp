'use strict';

var eventController = app.controller('EventController',
    function ($scope) {
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
                    name: 'Directive MasterClass',
                    creatorName: 'Vibhor Agarwal',
                    duration: '1 hr',
                    level: 'Advanced',
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
        $scope.upVoteEventSession = function (session) {
            session.upVotesCount++;
        };

        $scope.downVoteEventSession = function (session) {
            session.downVotesCount++;
        };
    }
);
