(function(){
"use strict";
 var module = angular.module("service");
 module.service("AccountService", AccountServiceFunction);

AccountServiceFunction.$inject = ["AppConstant", "$http", "$q"];
function AccountServiceFunction(AppConstant, $http, $q)
{
  var service = this;
  var serverURL = AppConstant.CONSTANTS.SERVICEURL;

  service.Login = function(username, password)
  {
    var defer = $q.defer();
    var resp = $http({
      method:"GET",
      url:serverURL+"GetUser"
    });
    return resp;
  }

    service.ReadFile = function(fileName)
    {
      var defer = $q.defer();
      var resp = $http({
        method:"GET",
        url:serverURL+"ReadFile",
        params:{ReportName:fileName}
      });
      return resp;
    }

    service.ExcutePSBatch = function(fileName)
    {
      var defer = $q.defer();
      var resp = $http({
        method:"GET",
        url:serverURL+"RunCommand",
        params:{ReportName:fileName}
      });
      return resp;
    }
}

})();
