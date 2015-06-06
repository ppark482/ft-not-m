;(function(){
	
	angular.module('ftNotMApp')
		.controller('NewStreamCtrl', NewStreamController);

		NewStreamController.$inject = ['$scope', 'EchoNest'];

		function NewStreamController ($scope, EchoNest) {

			$scope.attributes = {};

			EchoNest.getPlaylist();


		}; // end controller

}());