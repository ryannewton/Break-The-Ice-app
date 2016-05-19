angular.module('break') 
.controller('landing', function($scope,moment){
	$scope.featured = [];
    $scope.title = "Break the ice";
    $scope.text = "landing controller for angular";
    $scope.categories = [];
    $scope.events = [
    {
    	title : "boring bbq",
    	img : 'http://35drsm2kcjyo1uhpn73720ja.wpengine.netdna-cdn.com/wp-content/uploads/2009/07/salt-lick-bbq-pit.jpg', 
    	description : "Salt Lick me", 
    	users_att : ['Sin','James','Adam'], 
    	owners:['ryan'],
    	creation_time: new Date("2016 05 18 21:00:00"),
    	start_time: new Date("2016 05 21 15:00:00"),
    	end_time: new Date("2016 05 21 18:00:00"),
    	categories : ["Food","Outdoors"]
    },
    {
    	title : "X Games Austin",
    	img : 'http://cdn.bmx.transworld.net/wp-content/blogs.dir/444/files/2016/02/2006-x-games12-dirt.jpg', 
    	description : "A festival that highlights the intersection of sports and lifestyle that exists in action sports", 
    	users_att : ['Sin','James','Adam'], 
    	owners:['ryan'],
    	creation_time: new Date("2016 05 28 21:00:00"),
    	start_time: new Date("2016 06 02 13:00:00"),
    	end_time: new Date("2016 06 03 18:00:00"),
    	categories : ["Outdoors"]
    },
     {
    	title : " IMPROVISED STAND UP",
    	img : 'http://a4.res.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,f_auto,w_800/v1453391642/event-poster-3076898.jpg', 
    	description : "We have some of Austin's best stand up comedians tell their funniest, most comedy-club ready jokes, and then re-do those jokes with absurd audience suggestions! Hosted by Katie Stone and Eric Nagurney! ", 
    	users_att : ['Sin','James','Adam'], 
    	owners:['ryan'],
    	creation_time: new Date("2016 05 19 09:00:00"),
    	start_time: new Date("2016 05 19 20:00:00"),
    	end_time: new Date("2016 05 19 22:00:00"),
    	categories : ["Arts"]
    }
    ];

    $scope.events.forEach(function(event){
    	event.diff = moment(event.start_time).fromNow();
    	event.startInHour = parseInt(moment(event.start_time).diff(Date.now(),'hours')); //usful for events starting soon
    	event.categories.forEach(function(category){
    		if ($scope.categories.indexOf(category)===-1){
				$scope.categories.push(category);
    		}
    	});
    });
    $scope.tempEvent = $scope.events.slice();
    $scope.tempEvent = $scope.tempEvent.sort(function(a,b){
    	return a.startInHour - b.startInHour
    })
    $scope.featured = $scope.tempEvent.slice(0,3);
})