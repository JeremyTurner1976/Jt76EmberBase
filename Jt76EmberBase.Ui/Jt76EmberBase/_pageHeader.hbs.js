var page_header = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "﻿<div class=\"row jt76-padding-sides-md\">\r\n    <div class=\"col-xs-9 col-sm-10 col-lg-10\">\r\n        <div class=\"page-title\">\r\n            ";
  stack1 = ((helper = (helper = helpers.strPageTitle || (depth0 != null ? depth0.strPageTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strPageTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n        <div class=\"page-sub-header\">";
  stack1 = ((helper = (helper = helpers.strSubHeader || (depth0 != null ? depth0.strSubHeader : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strSubHeader","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n    </div>\r\n    <div class=\"text-right p-top-sm pull-right col-xs-3 col-sm-2 col-lg-2\">\r\n        <a href=\"#/dashboard\" class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a>\r\n    </div>\r\n</div>\r\n\r\n<hr class=\"jt76-hr-md\" />\r\n";
},"useData":true});