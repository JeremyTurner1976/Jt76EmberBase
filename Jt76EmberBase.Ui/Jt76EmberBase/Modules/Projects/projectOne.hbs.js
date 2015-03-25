var projectOne = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "﻿"
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "pageHeader", {"name":"partial","hash":{},"data":data})))
    + "\r\n\r\n<p>\r\n    TEST PROJECT ONE\r\n</p>\r\n<div>\r\n    <button "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "printPdf", {"name":"action","hash":{},"data":data})))
    + "\r\n            "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': (":btn :btn-success :btn-sm :jt76-padding-sides-sm :form-inline")
  },"data":data})))
    + ">\r\n        <i class=\"fa fa-asterisk\"></i>&nbsp;Print PDF\r\n    </button>\r\n</div>\r\n\r\n\r\n\r\n<div id=\"contentIframe\" style=\"width:100%;height:100%\">"
    + escapeExpression(((helper = (helper = helpers.iframe || (depth0 != null ? depth0.iframe : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"iframe","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"useData":true});