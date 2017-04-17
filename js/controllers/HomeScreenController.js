spaceApp.controller('HomeScreenController', function($scope, $http, $cookieStore, $cacheFactory,$templateCache, placeStorage, getInfoPlace, cache) 
{
	var placeId = cache.get("selectedPlaceId");
	if(placeId == "" || placeId == "undefined" || placeId == null || placeId != placeStorage.placeInfo._placeId){
		placeId = placeStorage.placeInfo._placeId;
		if(placeId == "" || placeId == "undefined" || placeId == null || placeId == 0){
			location.href= '#/SelectPlace';
		}else{
			cache.put("selectedPlaceId", placeId);
		}
	}
	$scope.getNameRoom = function (idRoom) {
				    	var nameRoom = cache.get("Room"+idRoom);
				    	if(nameRoom == "" || nameRoom == "undefined" || nameRoom == null){
				    		for(var i=0; i<getInfoPlace.infoPlace.rooms.length; i++)
				    		{
				    			if(getInfoPlace.infoPlace.rooms[i].id == idRoom)
				    			{
				    				cache.put("Room"+idRoom, getInfoPlace.infoPlace.rooms[i].name[0]);
				    				nameRoom = getInfoPlace.infoPlace.rooms[i].name[0];
				    			}
				    		}
				    	}
				    	return nameRoom;
	};
	$scope.getNameFirm = function (idFirm) {
				    	var nameFirm = cache.get("Firm"+idFirm);
				    	if(nameFirm == "" || nameFirm == "undefined" || nameFirm == null){
				    		$http({
								  method: 'GET',
								  url: 'https://api-dot-usapp-play.appspot.com/firms/'+idFirm
								}).then(function successCallback(response) {
								    cache.put("Firm"+idFirm, response.data.name[0]);
				    				nameFirm = response.data.name[0];
								  }, function errorCallback(response) {								  
								    nameFirm = "unkown firm";
								  });
				    	}
				    	return nameFirm;
	};
    //if(!getInfoPlace.infoPlace)
           // {
                $http({
                url: 'https://api-dot-usapp-play.appspot.com/arenas/'+ placeId +'/poll',
                method: "GET",
				headers: {
					'Content-Type' : "application/json",
    				'Authorization': "UnitedSpaces "+ $cookieStore.get('token')}
            	}
                ).then(function(response) {        	
                	getInfoPlace.infoPlace = response.data;
                	$scope.bookings = response.data.bookings;
                }, 
                function(response) {
                    alert( "ololo nope" + response.data);
                });
         //   }else{
        //    	$scope.bookings = getInfoPlace.infoPlace.bookings;
        //        alert( "all ok, data saved in cache" + getInfoPlace + getInfoPlace.infoPlace);
  //  }


    $scope.clickMouse = function ()
	{
		location.href= '#/SelectPlace';
	};
});