﻿var customError = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "Back";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "﻿<p>TEST ADMIN ERROR</p>\r\nid: "
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "<br />\r\nstrMessage: "
    + escapeExpression(((helper = (helper = helpers.strMessage || (depth0 != null ? depth0.strMessage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strMessage","hash":{},"data":data}) : helper)))
    + "<br />\r\nstrSource: "
    + escapeExpression(((helper = (helper = helpers.strSource || (depth0 != null ? depth0.strSource : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strSource","hash":{},"data":data}) : helper)))
    + "<br />\r\nstrAdditionalInformation: "
    + escapeExpression(((helper = (helper = helpers.strAdditionalInformation || (depth0 != null ? depth0.strAdditionalInformation : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strAdditionalInformation","hash":{},"data":data}) : helper)))
    + "<br />\r\nstrStackTrace: "
    + escapeExpression(((helper = (helper = helpers.strStackTrace || (depth0 != null ? depth0.strStackTrace : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strStackTrace","hash":{},"data":data}) : helper)))
    + "<br />\r\ndtCreated: "
    + escapeExpression(((helper = (helper = helpers.dtCreated || (depth0 != null ? depth0.dtCreated : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dtCreated","hash":{},"data":data}) : helper)))
    + "<br />\r\n<hr />\r\n";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.admin.errors", {"name":"link-to","hash":{
    'classNames': ("btn btn-info"),
    'tagName': ("button")
  },"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});