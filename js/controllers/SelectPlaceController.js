spaceApp.controller('SelectPlaceController', function($scope, $http, placeStorage) 
{
	$scope.placeStorage = placeStorage;
	$scope.clickMouseStockholm = function ()
	{
		placeStorage.placeInfo._placeName = 'Stockholm';
		placeStorage.placeInfo._placeId = '3010001';
		alert(placeStorage.placeInfo._placeName + placeStorage.placeInfo._placeId);
		location.href= '#/HomeScreen';
	};
});