var appDef = [
	'srvDef',
	function (srvDef) {
		return {
			templateUrl: 'views/app/def.tmpl',
			replace: true,
			restrict: 'E',
			controller: function ($scope) {
				$scope.title = 'def';
				$scope.ver = srvDef.ver;
			},
			link: function (scope, elm, attrs) {
				
			}
		};
	}
];