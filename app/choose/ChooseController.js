;(function (){
	'use strict';

	/**
	 * @ngdoc function
	 * @name ftNotMApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the ftNotMApp
	 */
	angular.module('ftNotMApp')
	  .controller('ChooseCtrl', function ($scope) {
	    $scope.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
	  });
}());