var errors = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "                <tr>\r\n                    <td>\r\n                        <div class=\"jt76-multiline\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strCreated : stack1), depth0))
    + "</div>\r\n                    </td>\r\n                    <td>\r\n                        ";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.admin.customError", (depth0 != null ? depth0.item : depth0), {"name":"link-to","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<br />\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"jt76-multiline\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strSource : stack1), depth0))
    + " "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strErrorLevel : stack1), depth0))
    + "</div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"jt76-multiline\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strAdditionalInformation : stack1), depth0))
    + "</div>\r\n                    </td>\r\n                </tr>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strMessage : stack1), depth0));
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "﻿<div class=\"inbox-body jt76-padding-sides-md p-top-xs \">\r\n    <div class=\"row m-bottom-md\">\r\n        <div class=\"col-sm-3 m-bottom-sm\">\r\n            <h2 class=\"no-margin\">\r\n                Errors\r\n            </h2>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"search-input\">\r\n                <input type=\"text\" class=\"form-control input-sm inline-block\">\r\n                <a href=\"#\" class=\"input-icon text-normal\"><i class=\"ion-ios7-search-strong\"></i></a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6 text-right text-left-sm\">\r\n            <div class=\"btn-group\">\r\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    Order By <span class=\"caret\"></span>\r\n                </button>\r\n                <ul class=\"dropdown-menu\" role=\"menu\">\r\n                    <li><a>Order</a></li>\r\n                    <li class=\"divider\"></li>\r\n                    <li><a>Reset</a></li>\r\n                </ul>\r\n            </div>\r\n            <a class=\"btn btn-primary\">\r\n                <i class=\"fa fa-fire\"></i>&nbsp;Inject New Error\r\n            </a>\r\n            <a class=\"btn btn-success\">\r\n                <i class=\"fa fa-plus-circle\"></i>&nbsp;Add Error\r\n            </a>\r\n            <a class=\"btn btn-info\">\r\n                <i class=\"fa fa-refresh\"></i>&nbsp;Refresh\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    "
    + escapeExpression(((helpers['pagination-display'] || (depth0 && depth0['pagination-display']) || helperMissing).call(depth0, {"name":"pagination-display","hash":{
    'pagination': ((depth0 != null ? depth0.paginationData : depth0)),
    'classNames': ("pagination-row clearfix m-bottom-sm")
  },"data":data})))
    + "\r\n\r\n    <div class=\"message-table table-responsive bg-light\">\r\n        <table class=\"table table-bordereds\">\r\n            <thead>\r\n                <tr class=\"bg-dark\">\r\n                    <th class=\"col-sm-2\">Created</th>\r\n                    <th class=\"col-sm-4\">Message</th>\r\n                    <th class=\"col-sm-3\">Source and Level</th>\r\n                    <th class=\"col-sm-3\">Additional Information</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.item : depth0), (depth0 != null ? depth0['in'] : depth0), (depth0 != null ? depth0.filteredModel : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\r\n        </table>\r\n    </div>\r\n    \r\n    "
    + escapeExpression(((helpers['pagination-display'] || (depth0 && depth0['pagination-display']) || helperMissing).call(depth0, {"name":"pagination-display","hash":{
    'classNames': ("pagination-row clearfix")
  },"data":data})))
    + "\r\n\r\n</div>";
},"useData":true});