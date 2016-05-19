angular.mondule('users',[])



.controller('UsersController',function($scope){
	$scope.user = {
		pic_url : 'http://vignette2.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436',
		alias : 'Grey-all-day',
		hometown : "Austin",
		interests : ['food']
	};
})