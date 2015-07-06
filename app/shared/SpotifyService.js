;(function(){

	angular.module('ftNotMApp')
		.factory('Spotify', Spotify);

	Spotify.$inject = ['$q', '$http'];

	function Spotify ($q, $http) {

		var settings = {
			apiBase : 'https://api.spotify.com/v1/',
			clientID : 'f41111ca1d2c457786e0cfb5f70192ea',
			clientSecret : '38f33bb2001b4227926707f3abb28e25'
		};

		var url = 'https://accounts.spotify.com/authorize/?client_id=f41111ca1d2c457786e0cfb5f70192ea&response_type=code&redirect_uri=http://localhost:9000/';

		function authorizeApp () {
			window.location = url;
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
			sendPlaylist : sendPlaylist,
			authorizeApp: authorizeApp
		}

	}; // end spotify factory

}());