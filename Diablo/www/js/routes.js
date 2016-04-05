angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.createNewSet', {
    url: '/createPage',
    views: {
      'side-menu21': {
        templateUrl: 'templates/createNewSet.html',
        controller: 'createNewSetCtrl'
      }
    }
  })

  .state('menu.itemsCategory', {
    url: '/itemsCategory',
    views: {
      'side-menu21': {
        templateUrl: 'templates/itemsCategory.html',
        controller: 'itemsCategoryCtrl'
      }
    }
  })

  .state('menu', {
    url: '/sideMenu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('character', {
    url: '/character/:characterId',
    templateUrl: 'templates/character.html',
    controller: 'characterCtrl'
  })

  .state('itemsList', {
	  url: '/itemsList/:categoryId',
	  templateUrl: 'templates/itemsList.html',
	  controller: 'itemsListCtrl'
  })
  
  .state('item', {
	  url: '/item/:itemId',
	  templateUrl: 'templates/item.html',
	  controller: 'itemCtrl'
  })
  
$urlRouterProvider.otherwise('/sideMenu/home')  

});