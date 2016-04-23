var app = angular.module('arayzApp', ["firebase", "mcwebb.twilio"]);
app.controller('indexController', function($scope){
	var ref = new Firebase("https://arayz.firebaseio.com/");
	var authData = ref.getAuth();
	$scope.isAuthenticated = false;
	$scope.authData = authData;

	if(authData){
		$scope.isAuthenticated = true;
		$scope.userEmail = authData.password.email;
		ref.child("Role").child(authData.uid).on("value", function(data){
			$scope.role = data.val();
			$scope.$apply();
		});
	}

	$scope.logout = function(){
		ref.unauth();
		location.reload();
	}

	$scope.login = function(){
        ref.authWithPassword({
        email    : this.username,
        password : this.password
    }, function(error, authData){
        if (error) {
            console.log(error);
        }
        else {
            location.reload();        
        }
    });
    };
});