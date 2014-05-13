'use strict';
angular.module('ilmon').config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/def', {
			templateUrl: 'views/def.tmpl',
			controller: 'cntDef'
		})
		.when('/chat', {
			templateUrl: 'views/chat.tmpl',
			controller: 'cntChat'
		})
		.otherwise({redirectTo: '/def'})
		;
}]);