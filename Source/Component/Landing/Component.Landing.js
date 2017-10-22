(function(){
"use strict";
 var module = angular.module("Component");
 module.controller("LandingController",LandingControllerFunction);

 LandingControllerFunction.$inject = ["AppConstant"];
 function LandingControllerFunction(AppConstant)
 {
   var $ctrl = this;
   $ctrl.lblHeaderText = AppConstant.HomeHeaderText;
   $ctrl.lblHomeText = AppConstant.HomeText;
   $ctrl.myInterval = 3000;
   $ctrl.slides = AppConstant.LISTIMAGESLIDE;
   $ctrl.Header = AppConstant.LANDINGHEADERTEXT;
   $ctrl.HeaderText = AppConstant.LANDINGHOMETEXT;
   $ctrl.Sections = AppConstant.LANDINGPAGESECTIONS;
  
 }

})();
