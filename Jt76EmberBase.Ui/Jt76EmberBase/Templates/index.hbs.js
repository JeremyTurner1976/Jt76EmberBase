var index = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "﻿<div class=\"wrapper preload\">\r\n\r\n    "
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, "topNav", {"name":"view","hash":{},"data":data})))
    + "\r\n    "
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, "sidebarMenu", {"name":"view","hash":{},"data":data})))
    + "\r\n\r\n    <div class=\"main-container jt76-content-placeholder\">\r\n        <div class=\"padding-md\">\r\n            <div class=\"row\">\r\n                "
    + escapeExpression(((helper = (helper = helpers.outlet || (depth0 != null ? depth0.outlet : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"outlet","hash":{},"data":data}) : helper)))
    + "\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    "
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, "footer", {"name":"view","hash":{},"data":data})))
    + "\r\n\r\n</div>\r\n<a href=\"#\" class=\"scroll-to-top hidden-print\"><i class=\"fa fa-chevron-up fa-lg\"></i></a>\r\n";
},"useData":true});