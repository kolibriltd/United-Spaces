spaceApp.controller('SelectPlaceController', function($scope, $http, $cacheFactory, placeStorage) 
{
	$scope.placeStorage = placeStorage;
	$scope.clickMouseStockholm = function ()
	{
		placeStorage.placeInfo._placeName = 'Stockholm';
		placeStorage.placeInfo._placeId = '3010001';
		location.href= '#/HomeScreen';
	};
});