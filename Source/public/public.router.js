(function() {
'use strict';
angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
 routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
 function routeConfig($stateProvider,$urlRouterProvider)
 { // Routes
   $urlRouterProvider.otherwise('/Landing');
  $stateProvider
     .state('Landing',{
        url:'/Landing',
        templateUrl : 'Source/Component/Landing/Component.Landing.html',
        controller:"LandingController as $ctrl"
      }
    )
    .state('Home',{
      url:'/Home',
      templateUrl : 'Source/Component/Home/Component.Home.html',
      controller:"HomeController as HomeCtrl"
    });
}
})();
