;(function(){

	angular.module('ftNotMApp')
		.factory('EchoNest', EchoNest);

	EchoNest.$inject = ['$q', '$http', 'Spotify'];

	function EchoNest ($q, $http, Spotify) {

		var settings = {
			apiBase : 'http://developer.echonest.com/api/v4/',
			apiKey : 'XLDPJFLJAI1Z6MJN0',
			consumerKey : 'c6a66194df1522e149ffe383e538baf0',
			sharedSecret : 'wb3ashGcRHGZdjgd7PCjng'
		};

		function getPlaylist () {
			var playlistUrl = settings.apiBase + 'playlist/static?api_key=' + settings.apiKey + '&artist=Weezer&artist=radiohead&format=json&results=20&type=artist';
			$http.get(playlistUrl).
				success(function(data, status, headers, config) {
				  console.log(data.response);
				  Spotify.sendPlaylist(data.response);
				}).
				error(function(data, status, headers, config) {
				 console.log('error retrieving playlist');
				});
		} // end build playlist

		function getSettings () {
			return settings;
		};

		return {
			getSettings : getSettings,
			getPlaylist : getPlaylist
		}

	}; // end echo nest factory

}());

/*
http://developer.echonest.com/api/v4/playlist/static?api_key=XLDPJFLJAI1Z6MJN0&artist=Weezer&artist=radiohead&format=json&results=20&type=artist
*/