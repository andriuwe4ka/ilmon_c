var srvChat = [
	'$rootScope',
	function ($rootScope) {
		var self = this
		  , socket = io.connect('http://localhost:8080')
		  ;

		this.send = function (msg) {
			socket.emit('msg', {msg: msg});
		};
	        	
		socket.on('msg', function (data) {
			$rootScope.$broadcast('msg', data);
			console.log(data);
		});
	}
];