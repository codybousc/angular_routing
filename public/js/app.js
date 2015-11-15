var routerApp = angular.module('routerApp', ['routerRoutes'])

//create the controllers
//this will be the controller for the ENTIRE site
routerApp.controller('mainController', function() {
  var vm = this;

  //big message variable to display our message in our views
  vm.bigMessage = "A smooth sea never made a skilled sailor";

})

//home page specific controller
.controller('homeController', function() {
  var vm = this;

  vm.message = "This is the home page, broski!";
})

//about page controller
.controller('aboutController', function() {

  var vm = this;

  vm.message = "Look! I'm an about page!";
})

//contact page controller
.controller('contactController', function() {
  var vm = this;

  vm.message = "Contact me!"

});
