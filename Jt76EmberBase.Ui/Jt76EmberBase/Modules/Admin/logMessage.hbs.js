var logMessage = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿<p>TEST ADMIN LOG MESSAGE</p>\r\nid: "
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "<br />\r\nstrLogMessage: "
    + escapeExpression(((helper = (helper = helpers.strLogMessage || (depth0 != null ? depth0.strLogMessage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strLogMessage","hash":{},"data":data}) : helper)))
    + "<br />\r\ndtCreated: "
    + escapeExpression(((helper = (helper = helpers.dtCreated || (depth0 != null ? depth0.dtCreated : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dtCreated","hash":{},"data":data}) : helper)))
    + "<br />";
},"useData":true});