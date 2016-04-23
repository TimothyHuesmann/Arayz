var app = angular.module('arayzApp');
app.controller('userController', function($scope, $firebaseArray){
	var ref = new Firebase("https://arayz.firebaseio.com/");
	var authData = ref.getAuth();

	$scope.usStates = ['Alabama', 'Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho'
					,'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missiouri','Montana','Nebraska','Nevada'
					,'New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee'
					,'Texas','Utah','Vermont','Virgina','Washington','West Virgina','Wisconsin','Wyoming'];
	$scope.countries = ["United States", "Canada", "Mexico"];

	$scope.updateData = function(){
		
	}
});