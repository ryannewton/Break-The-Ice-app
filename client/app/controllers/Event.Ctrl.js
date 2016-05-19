angular.modules('DaEvent',[])


.controller('Event',function($scope){

	$scope.event = {

		title : "",
    	img : '', 
    	description : '', 
    	users_att : [], 
    	owners:[],
    	categories : [],
    	messages : {	
    		event_id :   1,
    		 messages : [
 				{user_id :  1,
  				msg :  "",
  				time : "" , 
  				Date : 01/01/16}
  			]
		}
	}
})