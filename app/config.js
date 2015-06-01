;(function(){

	angular.module('ftNotMApp')

		.config( function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/choose')

			$stateProvider
				.state('choose', {
					url: '/choose',
					controller: 'ChooseCtrl',
					templateUrl: 'choose/choose.html' 
				})

				.state('new-stream', {
					url: '/new-stream',
					controller: 'NewStreamCtrl',
					templateUrl: 'new_stream/new_stream.html'
				})

				.state('existing', {
					url: '/existing',
					controller: 'ExistingCtrl',
					templateUrl: 'existing_stream/existing_stream.html'
				});

		}); // end config

}());