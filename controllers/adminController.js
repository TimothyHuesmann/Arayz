var app = angular.module('arayzApp');
app.controller('adminController', function($scope, $firebaseArray){
	var ref = new Firebase("http://arayz.firebaseio.com/");
	var authData = ref.getAuth();
	
});