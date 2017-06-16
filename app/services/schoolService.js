var $ = require("jquery"),
    promise = require("es6-promise"),
    resourceUrl = "http://localhost:7777/api/schools";

module.exports = {
  addSchool: function (school) {
    var Promise = promise.Promise;
    return new Promise(function (reslove, reject) {
      $.ajax({
         url: resourceUrl,
         data: JSON.stringify(school),
         method: "POST",
         dataType: "json",
         contentType: "application/json",
         success: reslove,
         error: reject
      });
    });
  },
  getSchools: function () {
    var Promise = promise.Promise;
    return new Promise(function(reslove, reject) {
      $.ajax({
        url: resourceUrl,
        method: "GET",
        dataType: "json",
        success: reslove,
        error: reject
      });
    });
  },
  deleteSchool: function(school) {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: resourceUrl + "/" + school._id,
        method: "DELETE",
        dataType: "json",
        success: resolve,
        error: reject
      });
    });
  }
}
