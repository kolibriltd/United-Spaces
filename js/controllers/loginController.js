var loginScreen=angular.module('loginScreen');
loginScreen.controller('loginController', function($scope) 
{
	var modelUser = this;
	var modelPassword = this;
	var user="";
	var password ="";
	var loginButton= angular.element( document.querySelector( '#loginbutton' ) );

	$scope.clickMouse = function ()
	{
		user =$scope.modelUser;
		password =$scope.modelPassword;

		
		if($scope.modelUser==null || user.username.length==0)
		{ 
			loginButton.addClass('loginButton');
			alert("Input username");
		}
		else if($scope.modelPassword==null || password.password.length==0)
		{ 
			loginButton.addClass('loginButton');
			alert("Input password");
		}
		else
		{
			loginButton.addClass('loginButtonDark');
			alert("Good!");
		}
	};
});