spaceApp.controller('HomeScreenController', function($scope, $http, $cookieStore, placeStorage, getInfoPlace) 
{
    if(getInfoPlace.infoPlace == "null")
            {
                $http({
                url: 'https://api-dot-usapp-play.appspot.com/arenas/'+ placeStorage.placeInfo._placeId +'/poll',
                method: "GET",
				headers: {
					'Content-Type' : "application/json",
    				'Authorization': "UnitedSpaces "+ $cookieStore.get('token')}
            	}
                ).then(function(response) {
                	alert(response.data.bookings.length);
                	$scope.count = response.data.bookings.length;
                	$scope.bookings = response.data.bookings;
                    getInfoPlace.infoPlace = response.data;
                }, 
                function(response) {
                    alert( "ololo nope" + response.data);
                });
            }else{
                 alert( "your token save in cookie: " + $scope.infoPlace).infoPlace;
    }   
    $scope.start = '11';
	$scope.stop = '12';
	$scope.firm = 'firmname';
	$scope.people = '3';
	$scope.room = 'nameRooasdm';
});