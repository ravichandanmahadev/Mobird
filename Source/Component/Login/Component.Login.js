(function(){
 "use strict";
  var module = angular.module("Component");

  module.component("appLogin", {
   templateUrl: "Source/Component/Login/component.login.html",
   controller :LoginControllerFunction
  });

  LoginControllerFunction.$inject = ["AppConstant","AccountService","$location"];
  function LoginControllerFunction(AppConstant, AccountService,$location)
  {
    var $ctrl = this;
    $ctrl.lblusername = "User Name";
    $ctrl.lblpassword = "Password";
    $ctrl.lblrememberme = "Remember Me";
    $ctrl.lbllogin ="Log In";
    $ctrl.OnLogin = function(){
          var response = AccountService.Login($ctrl.UserName, $ctrl.Password);
      response.then(function(result){''
        if(result.data ===null)
        alert("Error in Loading User Information");
           else {
            if(result.data != null){
                if(result.data['chandan'].password === $ctrl.Password){
                  $location.path('Home');
              }
              else
              alert("Invalid Username or Password");
            }
            else
            alert("Invalid Username or Password");
          }

      }).catch(function(){
        alert("Error in Loading User Information");
        });
    }
  }

})();
