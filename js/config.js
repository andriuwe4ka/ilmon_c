'use strict';
angular.module('ilmon')
	.config([
	         '$locationProvider',
	         function($locationProvider) {
	        	 $locationProvider.html5Mode(true);
	         }
	]);