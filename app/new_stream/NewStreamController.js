;(function(){

	angular.module('ftNotMApp')
		.controller('NewStreamCtrl', NewStreamController);

		NewStreamController.$inject = ['$scope', 'EchoNest', 'Spotify'];

		function NewStreamController ($scope, EchoNest, Spotify) {

			$scope.attributes = {};

			$scope.userLogin = function(){
				Spotify.authorizeApp();
			}

			// EchoNest.getPlaylist();


		}; // end controller

}());