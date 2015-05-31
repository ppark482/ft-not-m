(function(){

	angular.module('ftNotMApp')
		.factory('Spotify', SpotifyFactory);

	SpotifyFactory.$inject = ['$q', '$scope', '$http'];

	function SpotifyFactory ($q, $scope, $http) {

		var settings = {
			apiBase : 'https://api.spotify.com/v1/',
			clientID : '8d966c252c874946a133f10fa5e5febe',
			clientSecret : '396b3a7e1df64e8c8d0946ff02c2b0e3'
		};

		function getSettings () {
			return settings;
		}

		return {
			getSettings : getSettings
		}

	}; // end spotify factory

}());