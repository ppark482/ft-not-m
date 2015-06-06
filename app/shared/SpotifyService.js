;(function(){

	angular.module('ftNotMApp')
		.factory('Spotify', Spotify);

	Spotify.$inject = ['$q', '$http'];

	function Spotify ($q, $http) {

		var settings = {
			apiBase : 'https://api.spotify.com/v1/',
			clientID : '8d966c252c874946a133f10fa5e5febe',
			clientSecret : '396b3a7e1df64e8c8d0946ff02c2b0e3'
		};

		function authorizeApp () {
			$http.post('https://accounts.spotify.com/api/token', 'Authorization: Basic ' + settings.clientSecret)
				.success( function(data, status, headers, config) {
					console.log(status);
				})
				.error( function(data, status, headers, config) {
					console.log('failed to authorize application');
				});
		}

		function getSettings () {
			return settings;
		}

		function sendPlaylist (data) {
			authorizeApp();
			var playlistUrl = settings.apiBase + '/v1/tracks/?ids=',
					songIds = [];
					songString = '';
			angular.forEach(data.songs, function (x) {
				songIds.push(x.id);
			});
			songString = songIds.join(',');
			$http.get(playlistUrl + songString).
				success( function(data, status, headers, config) {
					console.log(data);
				}).
				error( function(data, status, headers,config) {
					console.log('error retrieving spotify shit');
				});
		}

		return {
			getSettings : getSettings,
			sendPlaylist : sendPlaylist
		}

	}; // end spotify factory

}());