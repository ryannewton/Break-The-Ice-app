angular.module('break') 
.controller('landing', function($scope){
    $scope.title = "Break the ice";
    $scope.text = "landing controller for angular";
    $scope.events = [
    {
    	title : "boring bbq",
    	img : 'http://35drsm2kcjyo1uhpn73720ja.wpengine.netdna-cdn.com/wp-content/uploads/2009/07/salt-lick-bbq-pit.jpg', 
    	description : "A place to waste time", 
    	users_att : ['Sin','James','Adam'], 
    	owners:['ryan'],
    	categories : ["Food"]
    }
    ];
})