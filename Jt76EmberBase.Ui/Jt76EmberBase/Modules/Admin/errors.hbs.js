var errors = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "                <tr>\r\n                    <td class=\"col-sm-2 col-md-2\">\r\n                        <div class=\"jt76-multiline\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strCreated : stack1), depth0))
    + "</div>\r\n                    </td>\r\n                    <td class=\"col-sm-4 col-md-4\">\r\n                        ";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.admin.errorDetails", (depth0 != null ? depth0.item : depth0), {"name":"link-to","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n                    </td>\r\n                    <td class=\"col-sm-3 col-md-3 hidden-xs\">\r\n                        <div class=\"jt76-multiline\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strSource : stack1), depth0))
    + " "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strErrorLevel : stack1), depth0))
    + "</div>\r\n                    </td>\r\n                    <td class=\"col-sm-3 col-md-3 hidden-xs hidden-sm hidden-md\">\r\n                        <div class=\"jt76-multiline\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strAdditionalInformation : stack1), depth0))
    + "</div>\r\n                    </td>\r\n                </tr>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"jt76-title-link jt76-multiline\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strMessage : stack1), depth0))
    + "</div>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "﻿"
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "pageHeader", {"name":"partial","hash":{},"data":data})))
    + "\r\n\r\n<div class=\"inbox-body jt76-padding-sides-md p-top-xs\">\r\n    \r\n    "
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "arrayButtonSet", {"name":"partial","hash":{},"data":data})))
    + "\r\n\r\n    "
    + escapeExpression(((helpers['pagination-display'] || (depth0 && depth0['pagination-display']) || helperMissing).call(depth0, {"name":"pagination-display","hash":{
    'pagination': ((depth0 != null ? depth0.paginationData : depth0)),
    'classNames': ("pagination-row clearfix m-bottom-sm")
  },"data":data})))
    + "\r\n\r\n    <div class=\"message-table table-responsive bg-light\">\r\n        <table class=\"table table-bordereds\">\r\n            <thead>\r\n                <tr class=\"bg-dark\">\r\n                    <th class=\"col-sm-2 col-md-2\">Created</th>\r\n                    <th class=\"col-sm-4 col-md-4\">Message</th>\r\n                    <th class=\"col-sm-3 col-md-3 hidden-xs\">Source and Level</th>\r\n                    <th class=\"col-lg-3 hidden-xs hidden-sm hidden-md\">Additional Information</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.item : depth0), (depth0 != null ? depth0['in'] : depth0), (depth0 != null ? depth0.displayModel : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    "
    + escapeExpression(((helpers['pagination-display'] || (depth0 && depth0['pagination-display']) || helperMissing).call(depth0, {"name":"pagination-display","hash":{
    'pagination': ((depth0 != null ? depth0.paginationData : depth0)),
    'classNames': ("pagination-row clearfix m-bottom-sm")
  },"data":data})))
    + "\r\n\r\n</div>\r\n\r\n";
},"useData":true});