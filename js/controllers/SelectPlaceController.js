spaceApp.controller('SelectPlaceController', function($scope, $http, $cacheFactory, $localStorage) 
{
	$scope.clickMouseStockholm = function ()
	{
		localStorage.setItem("SelectPlaceId", "3010001")
		location.href= '#/HomeScreen';
	};
});