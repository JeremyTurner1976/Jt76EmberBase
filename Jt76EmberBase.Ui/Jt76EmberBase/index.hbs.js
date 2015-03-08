var index = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "﻿<div class=\"wrapper preload\">\r\n\r\n    "
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, "topNav", {"name":"view","hash":{},"data":data})))
    + "\r\n    "
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, "sidebarMenu", {"name":"view","hash":{},"data":data})))
    + "\r\n    \r\n    <div class=\"main-container\">\r\n        <div class=\"padding-md\">\r\n            <div class=\"row\" "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'style': ("heightStyle")
  },"data":data})))
    + " >\r\n\r\n                <div class=\"row jt76-padding-sides-md\">\r\n                    <div class=\"col-xs-9 col-sm-10 col-lg-10\">\r\n                        <div class=\"page-title\">\r\n                            Title\r\n                        </div>\r\n                        <div class=\"page-sub-header\">\"Sub Header\"</div>\r\n                    </div>\r\n                    <div class=\"text-right p-top-sm pull-right col-xs-3 col-sm-2 col-lg-2\">\r\n                        <a href=\"#/\" class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr class=\"jt76-hr-md\" />\r\n\r\n                "
    + escapeExpression(((helper = (helper = helpers.outlet || (depth0 != null ? depth0.outlet : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"outlet","hash":{},"data":data}) : helper)))
    + "\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    "
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, "footer", {"name":"view","hash":{},"data":data})))
    + "\r\n\r\n</div>\r\n<a href=\"#\" class=\"scroll-to-top hidden-print\"><i class=\"fa fa-chevron-up fa-lg\"></i></a>\r\n";
},"useData":true});