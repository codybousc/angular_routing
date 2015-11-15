//inject ngRoute for all our routing needs
angular.module('routerRoutes', ['ngRoute'])

//configure our routes
.config(function($routeProvider, $locationProvider) {
  $routeProvider

  //route for the home page
  .when('/', {
    templateUrl: 'views/pages/home.html',
    controller: 'homeController',
    controllerAs: 'home'
  })

  .when('/about', {
    templateUrl: 'views/pages/about.html',
    controller: 'aboutController',
    controllerAs: 'about'
  })

  .when('/contact', {
    templateUrl: 'views/pages/contact.html',
    controller: 'contactController',
    controllerAs: 'contact'
  });

  //sets the app up to have pretty URLS

  $locationProvider.html5Mode({
    enabled:true,
    requireBase: false
  });
});
