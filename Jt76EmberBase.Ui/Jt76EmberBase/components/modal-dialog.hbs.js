var modal_dialog = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "﻿<div class=\"overlay\" id=\"overlay\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "close", {"name":"action","hash":{},"data":data})))
    + ">\r\n    <div class=\"pull-right text-success\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "close", {"name":"action","hash":{},"data":data})))
    + "><i class=\"fa fa-check-circle\" style=\"font-size:50px;padding:8px;\"></i></div>\r\n</div>\r\n<div class=\"jt76-modal-dialog\">\r\n    "
    + escapeExpression(((helper = (helper = helpers['yield'] || (depth0 != null ? depth0['yield'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"yield","hash":{},"data":data}) : helper)))
    + "\r\n</div>";
},"useData":true});