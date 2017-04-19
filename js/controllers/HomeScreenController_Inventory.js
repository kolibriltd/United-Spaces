spaceApp.controller('HomeScreenController_Inventory', function($scope, $http, $cookieStore, $templateCache, placeStorage) 
{
	$scope.clickMouseHome = function (){
		location.href= '#/HomeScreen';
	};
	$scope.clickMouseMeeting = function (){
		location.href= '#/HomeScreen_Meetings';
	};
});