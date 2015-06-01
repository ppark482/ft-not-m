;(function(){

	angular.module('ftNotMApp')
		.factory('EchoNest', EchoNestFactory);

	EchoNestFactory.$inject = ['$q', '$scope', '$http'];

	function EchoNestFactory ($q, $scope, $http) {

		var settings = {
			apiBase : 'http://developer.echonest.com/api/v4/',
			apiKey : 'XLDPJFLJAI1Z6MJN0',
			consumerKey : 'c6a66194df1522e149ffe383e538baf0',
			sharedSecret : 'wb3ashGcRHGZdjgd7PCjng'
		};

		function getSettings () {
			return settings;
		};

		return {
			getSettings : getSettings
		}

	}; // end echo nest factory

}());