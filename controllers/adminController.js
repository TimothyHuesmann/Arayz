var app = angular.module('arayzApp')
.config(function (TwilioProvider) {
    TwilioProvider.setCredentials({
        accountSid: 'ACb9a9bba6cee858848e6667bc0f3deb17',
        authToken: 'd090184d6129134003a579d6fccace5a'
    });
});
app.controller('adminController', function($scope, $firebaseArray, Twilio){
	var ref = new Firebase("http://arayz.firebaseio.com/");
	var authData = ref.getAuth();
	var myUId = authData.uid;
	$scope.myUID = myUId;

	//Get Campaign Data
	var campaign_data = ref.child("Campaigns");
	$scope.campaigns = $firebaseArray(campaign_data);

	$scope.createCampaign = function(){
		var campaignRef = new Firebase("https://arayz.firebaseio.com/Campaigns");
		var newCampaignRef = campaignRef.push();

		newCampaignRef.set({
			admin : myUId,
			size : '0',
			name : 'Rokkin Cat Campaign'
		});
	};

	$scope.sendMessage = function(obj){
		Twilio.create('Messages', {
            from: '+15005550006',
            to: '+12626857957',
            body: 'This is a test! yay!'
        })
        .success(function (data, status, headers, config) {
            // Success - do something
        })
        .error(function (data, status, headers, config) {
            // Failure - do something
        });
	};
});