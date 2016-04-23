var app = angular.module('arayzApp', ["firebase"]);
app.controller('indexController', function($scope){
	var ref = new Firebase("https://arayz.firebaseIO.com/");
	var authData = ref.getAuth();
	$scope.isAuthenticated = false;
	$scope.authData = authData;

	$scope.logout = function(){
		ref.unauth();
		location.reload();
	}

	$scope.login = function(){
		ref.authWithPassword({
			email : this.username,
			password : this.password
		}, function(error, authData){
			if(error){
				console.log(error);
			}
			else{
				location.reload();
			}
		}
	});
	};
});