var app = angular.module('arayzApp');
app.controller('loginRedirectController', function($scope, $firebaseArray){
	var ref = new Firebase("https://arayz.firebaseIO.com/");
	var authData = ref.getAuth();
	if(!authData){
		window.location.href = "index.html";
	}
});