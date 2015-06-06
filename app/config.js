;(function(){

	angular.module('ftNotMApp')

		.config( function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/')

			$stateProvider

				.state('landing', {
					url: '/',
					controller: 'LandingCtrl',
					templateUrl: 'landing/landing.html'
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