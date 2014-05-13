var cntChat = [
	'$scope',
	'srvChat',
	function ($scope, srvChat) {
		$scope.msg = '';
		$scope.chat = [];
		$scope.send = function () {
			srvChat.send($scope.msg);
			$scope.msg = '';
		};
		$scope.$on('msg', function (e, data) {
			$scope.chat.push(data);
			$scope.$apply();
		});
	}
];