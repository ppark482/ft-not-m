;(function(){

	angular.module('ftNotMApp')

		.config( function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/choose')

			$stateProvider
				.state('choose', {
					url: '/choose',
					controller: 'ChooseCtrl',
					templateUrl: 'choose/choose.html' 
				});

		}); // end config

}());