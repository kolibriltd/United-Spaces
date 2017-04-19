spaceApp.controller('EditBookingController', function($scope, $http, $localStorage, cache) 
{
	var editBooking = JSON.parse(cache.get("bookingForEdit"));
	$scope.FirmName = localStorage.getItem("Firm"+editBooking.firmIds[0]);
	$scope.RoomName = localStorage.getItem("Room"+editBooking.roomId);
	$scope.StartTime = editBooking.start;
	$scope.EndTime   = editBooking.end;
	$scope.peoples = editBooking.attendees.length;
	$http({
		  method: 'GET',
		  url: 'https://api-dot-usapp-play.appspot.com/users/'+ editBooking.createdBy
		}).then(function successCallback(response) {
			$scope.createdUser = response.data.firstName + " " + response.data.lastName;
		  }, function errorCallback(response) {								  
		    nameFirm = "unkown name";
	});
});