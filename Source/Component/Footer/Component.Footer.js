(function(){
"use strict";
var module = angular.module("Component");

module.component("appFooter", {
 templateUrl: "Source/Component/Footer/Component.Footer.html",
 controller :FooterControllerFunction
});

FooterControllerFunction.$inject = ["AppConstant"];
function FooterControllerFunction(AppConstant)
{
  var model = this;
  model.FooterText = AppConstant.FOOTERTEXT;
}
})();
