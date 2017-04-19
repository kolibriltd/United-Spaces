spaceApp.controller('HomeScreenController_Meetings', function($scope, $http, $cookieStore, $templateCache, placeStorage) 
{
	$scope.clickMouseHome = function (){
		location.href= '#/HomeScreen';
	};
	$scope.clickMouseInventory = function (){
		location.href= '#/HomeScreen_Inventory';
	};
});