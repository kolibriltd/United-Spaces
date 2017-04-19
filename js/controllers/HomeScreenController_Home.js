spaceApp.controller('HomeScreenController_Home', function($scope, $http, $cookieStore, $templateCache, $localStorage, cache, placeStorage) 
{
	var placeId = localStorage.getItem("SelectPlaceId");
	var infoPlace = JSON.parse(localStorage.getItem("infoPlace"));
	if(placeId == "" || placeId == "undefined" || placeId == null){
		location.href= '#/SelectPlace';
	}
	$scope.getNameRoom = function (idRoom) {
		var nameRoom = localStorage.getItem("Room"+idRoom);
    	if(nameRoom == "" || nameRoom == "undefined" || nameRoom == null){
    		for(var i=0; i< infoPlace.rooms.length; i++)
    		{
    			if( infoPlace.rooms[i].id == idRoom)
    			{
    				localStorage.setItem("Room"+idRoom, infoPlace.rooms[i].name[0]);
    				nameRoom = infoPlace.rooms[i].name[0];
    			}
    		}
    	}
    	return nameRoom;
	};
	$scope.getNameFirm = function (idFirm) {
		var nameFirm = localStorage.getItem("Firm"+idFirm);
    	if(nameFirm == "" || nameFirm == "undefined" || nameFirm == null){
    		$http({
				  method: 'GET',
				  url: 'https://api-dot-usapp-play.appspot.com/firms/'+idFirm
				}).then(function successCallback(response) {
					localStorage.setItem("Firm"+idFirm, response.data.name[0]);
    				nameFirm = response.data.name[0];
				  }, function errorCallback(response) {								  
				    nameFirm = "unkown firm";
				  });
    	}
    	return nameFirm;
	};
	$scope.todayShow = function(startTime, status)
	{
		var date = new Date(startTime);
		var dateNow = new Date();
		if(date.getDate() != dateNow.getDate() || date.getMonth() != dateNow.getMonth() || parseInt(status)>30 )
		{
			return false;
		}else{
			return true;
		}
	};
	$scope.ReturnTextColor = function(status)
	{
		if(parseInt(status)<30)
		{
			var styleRedText = "color: red";
			return styleRedText;
		}else{
			return null;
		}
	};
	if(infoPlace != "" || infoPlace != "undefined" || infoPlace != null){
		$scope.bookings = infoPlace.bookings;
	}
	$http({
                url: 'https://api-dot-usapp-play.appspot.com/arenas/'+ placeId +'/poll',
                method: "GET",
				headers: {
					'Content-Type' : "application/json",
    				'Authorization': "UnitedSpaces "+ $cookieStore.get('token')}
            	}
                ).then(function(response) {        	
                	infoPlace = response.data;
                	$scope.bookings = response.data.bookings;
                	localStorage.setItem("infoPlace", JSON.stringify(response.data));
                }, 
                function(response) {
                });
    $scope.clickMouseMeeting = function (){
		location.href= '#/HomeScreen_Meetings';
	};
	$scope.clickMouseInventory = function (){
		location.href= '#/HomeScreen_Inventory';
	};


	$scope.clickMouseEditBooking = function(booking){
		cache.put( "bookingForEdit", JSON.stringify(booking));
		location.href= '#/EditBooking';
	};
});