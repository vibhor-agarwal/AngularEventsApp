'use strict';

var eventsController = app.controller('EventsController',
    function ($scope) {
        $scope.events = [
            {
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
                    },
                    {
                        name: 'Scopes',
                    },
                    {
                        name: 'Controllers',
                    }
                ]
            },
            {
                name: 'Angular Boot Camp - Part2',
                date: '5/2/2016',
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
                    },
                    {
                        name: 'Scopes',
                    }
                ]
            }
        ];


        //$scope.events = [
        //    {
        //        name: 'Angular Boot Camp',
        //        date: '1/2/2016'
        //    },
        //    {
        //        name: 'Angular Annual Conference',
        //        date: '1/1/2013'
        //    }
        //];
    }
);
