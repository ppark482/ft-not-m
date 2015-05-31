;(function(){
	'use strict';

	/**
	 * @ngdoc overview
	 * @name ftNotMApp
	 * @description
	 * # ftNotMApp
	 *
	 * Main module of the application.
	 */
	angular
	  .module('ftNotMApp', ['ngCookies', 'ngResource'])
	  .constant('constants', {
	  	'CLICK' : 'click'
	  });

}());