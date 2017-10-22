(function(){
"use strict";
var module = angular.module("Component");

module.component("appHeader", {
 templateUrl: "Source/Component/Header/Component.Header.html",
 controller :HeaderControllerFunction
});

HeaderControllerFunction.$inject = ["AppConstant"];
function HeaderControllerFunction(AppConstant)
{
  var $ctrl =this;
  $ctrl.lblHeader = AppConstant.HEADERTEXT;
  $ctrl.menuList =AppConstant.MenuItems;

}
})();
