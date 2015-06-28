var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/photos/:id',{
    	// maps the URL /photos/:id to the controller PhotoController and the template views/photo.html
    	// visit localhost... click on a photo. A detail page about that photo should appear
    	controller: 'PhotoController', 
    	templateUrl: 'views/photo.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});