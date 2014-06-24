'use strict';

/* Controllers */
angular.module('jobClock.controllers', []).
    controller('TimerPanelController', function($scope) {
        $scope.timers = [
            {
                id: 1,
                title: "Maintenance",
                start: "12:00pm",
                end: "",
                isRunning: true,
                group: 1
            },
            {
                id: 2,
                title: "Publish Everything",
                start: "12:00pm",
                end: "",
                isRunning: false,
                group: 2,
            },
            {
                id: 3,
                title: "Ops",
                start: "12:00pm",
                end: "",
                isRunning: false,
                group: 3
            }
        ];
        $scope.timerClicked = function(id) {
            _($scope.timers).each(function(element, index, list) {
                if (element.id === id) {
                    element.isRunning = true;
                } else {
                    element.isRunning = false;
                }
            });
        };
    });



