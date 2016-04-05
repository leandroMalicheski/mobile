angular.module('app.directives', [])

.directive('blankDirective', [function(){

}])

.directive('setForm', function(){
	return{
		restrict: "E",
		templateUrl: "templates/characterSetForm.html"
	};
})

.directive('charProfile', function(){
	return{
		restrict: "E",
		templateUrl: "templates/characterProfile.html"
	};
});



