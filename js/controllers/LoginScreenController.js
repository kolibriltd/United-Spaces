var spaceApp = angular.module('spaceApp', ['ngRoute', 'ngCookies', 'ngStorage' ])
spaceApp.controller('LoginScreenController', function($scope, $http, $cookieStore) 
{
	var modelUser = this;
	var modelPassword = this;
	var user="";
	var password ="";
	var loginButton= angular.element( document.querySelector( '#loginbutton' ) ); 
	$scope.visibilityTest = false;
	$scope.clickMouse = function ()
	{
		user = $scope.modelUser;
		password = $scope.modelPassword;
		$scope.visibilityTest = true;
		if($scope.modelUser==null || user.username.length==0)
		{ 
			loginButton.addClass('loginButton');
			$scope.error = "Incorrect username.";
			$scope.visibilityTest = true;
		}
		else if($scope.modelPassword==null || password.password.length==0)
		{ 
			loginButton.addClass('loginButton');
			$scope.error = "Incorrect password.";
			$scope.visibilityTest = true;
		}
		else
		{
    		  $http({
        		url: 'https://api-dot-usapp-play.appspot.com/users/signin',
        		method: "POST",
        		data: { 'email' : "yngling@demandcalendar.com",
        				'password' : "test" }
    			}
    			).then(function(response) {
                	$cookieStore.put("token", response.data.token);
                	location.href='#/SelectPlace';
    			}, 
    			function(response) {
            		$scope.error = "Incorrect username or password.";
					$scope.visibilityTest = true;
    			});
		}
	};
	
});