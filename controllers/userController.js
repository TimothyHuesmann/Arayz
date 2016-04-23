var app = angular.module('arayzApp');
app.controller('userController', function($scope, $firebaseArray){
	var ref = new Firebase("https://arayz.firebaseio.com/");
	var authData = ref.getAuth();

	
});