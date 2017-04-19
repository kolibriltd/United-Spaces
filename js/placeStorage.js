spaceApp.service('placeStorage', function () {
    this.placeInfo = {
        _placeName: 'empty',
        _placeId: '0'
    };
});
spaceApp.factory('cache', function ($cacheFactory) {
	return $cacheFactory('MyCache', {});
});



