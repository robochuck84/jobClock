'use strict';


// Declare app level module which depends on filters, and services
angular.module('jobClock', [
    'ngRoute',
    'jobClock.filters',
    'jobClock.services',
    'jobClock.directives',
    'jobClock.controllers',
    'timer'
]).
    config(['$routeProvider', function($routeProvider) {
    }]);
