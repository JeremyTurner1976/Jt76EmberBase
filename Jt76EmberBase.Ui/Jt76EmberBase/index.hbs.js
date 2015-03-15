var index = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "                <div "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'style': ("strHeightStyle")
  },"data":data})))
    + ">\r\n                    "
    + escapeExpression(((helper = (helper = helpers.outlet || (depth0 != null ? depth0.outlet : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"outlet","hash":{},"data":data}) : helper)))
    + "\r\n                </div>\r\n";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <div class=\"jt76-loading-overlay\" "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'style': ("strHeightStyle")
  },"data":data})))
    + ">\r\n                </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "﻿<div class=\"wrapper preload\">\r\n\r\n    "
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, "topNav", {"name":"view","hash":{},"data":data})))
    + "\r\n    "
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, "sidebarMenu", {"name":"view","hash":{},"data":data})))
    + "\r\n\r\n    <div class=\"main-container\">\r\n        <div class=\"padding-md\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.bIsLoaded : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\r\n    </div>\r\n\r\n    "
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, "footer", {"name":"view","hash":{},"data":data})))
    + "\r\n</div>\r\n\r\n<a class=\"scroll-to-top hidden-print\"><i class=\"fa fa-chevron-up fa-lg\"></i></a>\r\n";
},"useData":true});