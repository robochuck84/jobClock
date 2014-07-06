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
                group: 1,
                time: 0
            },
            {
                id: 2,
                title: "Publish Everything",
                start: "12:00pm",
                end: "",
                isRunning: false,
                group: 2,
                time: 0
            },
            {
                id: 3,
                title: "Ops",
                start: "12:00pm",
                end: "",
                isRunning: false,
                group: 3,
                time: 0
            }
        ];
        $scope.current_timer = $scope.timers[0];
        $scope.id = 4;
        $scope.created_timer_name;
        
        $scope.timerClicked = function(id) {
            _($scope.timers).each(function(element, index, list) {
                if (element.id === id) {
                    element.isRunning = true;
                } else {
                    element.isRunning = false;
                }
                $scope.current_timer = element;
                
            });
        };
        
        $scope.createTimer = function() {
            $scope.timers.push(
                {
                    id: $scope.id,
                    title: $scope.created_timer_name,
                    start: "12:00pm",
                    end: "",
                    isRunning: false,
                    group: 1,
                    time: 0
                }
            );
            $scope.id += 1;
        };

        $scope.$on('timer-tick', function(event, args) {
            $scope.current_timer.time += 1000;
        });
    });



