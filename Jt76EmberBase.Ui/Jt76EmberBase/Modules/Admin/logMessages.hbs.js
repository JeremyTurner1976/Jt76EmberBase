var logMessages = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "                    <li><a "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "toggleSort", (depth0 != null ? depth0.item : depth0), {"name":"action","hash":{},"data":data})))
    + ">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.value : stack1), depth0))
    + "</a></li>\r\n";
},"3":function(depth0,helpers,partials,data) {
  return "            <i class=\"fa fa-plus-circle\"></i>&nbsp;Add Log Message\r\n";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "                <tr>\r\n                    <td class=\"col-sm-2\">\r\n                        <div class=\"jt76-multiline\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strCreated : stack1), depth0))
    + "</div>\r\n                    </td>\r\n                    <td class=\"col-sm-10 jt76-no-select\">\r\n";
  stack1 = ((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.Jt76EmberBase : depth0)) != null ? stack1.ExpandingSingleItemView : stack1), {"name":"view","hash":{
    'nMaxLength': (160),
    'strText': (((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strLogMessage : stack1))
  },"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </td>\r\n                </tr>\r\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                        ";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.admin.logMessage", (depth0 != null ? depth0.item : depth0), {"name":"link-to","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.view : depth0)) != null ? stack1.jt76ReadMore : stack1), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"jt76-title-link\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.view : depth0)) != null ? stack1.formattedText : stack1), depth0))
    + "</div>";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                        <span class=\"text-success\">Read";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.view : depth0)) != null ? stack1.jt76IsExpanded : stack1), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\r\n";
},"10":function(depth0,helpers,partials,data) {
  return " Less ";
  },"12":function(depth0,helpers,partials,data) {
  return " More ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "﻿"
    + escapeExpression(((helpers['page-header'] || (depth0 && depth0['page-header']) || helperMissing).call(depth0, {"name":"page-header","hash":{
    'strSubHeader': ((depth0 != null ? depth0.strSubHeader : depth0)),
    'strPageTitle': ((depth0 != null ? depth0.strPageTitle : depth0))
  },"data":data})))
    + "\r\n\r\n<div class=\"inbox-body jt76-padding-sides-md p-top-xs\">\r\n    <div class=\"row m-bottom-sm\">\r\n        <div class=\"col-sm-2 col-md-2 m-bottom-sm\">\r\n            <h2 class=\"no-margin\">\r\n                Logs\r\n            </h2>\r\n        </div>\r\n\r\n        <div class=\"col-sm-2 col-md-2 m-bottom-sm\">\r\n            <div class=\"search-input\">\r\n                "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control input-sm inline-block"),
    'value': ((depth0 != null ? depth0.strToSearchFor : depth0))
  },"data":data})))
    + "\r\n                <a class=\"input-icon text-normal\" style=\"cursor:inherit;\"><i class=\"ion-ios7-search-strong\"></i></a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-8 col-md-8 text-right text-left-sm\">\r\n            <div class=\"btn-group\">\r\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    Order By <span class=\"caret\"></span>\r\n                </button>\r\n                <ul class=\"dropdown-menu dropdown-menu-sort\" role=\"menu\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.item : depth0), (depth0 != null ? depth0['in'] : depth0), (depth0 != null ? depth0.displayProperties : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    <li class=\"divider\"></li>\r\n                    <li><a "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "toggleSort", "reset", {"name":"action","hash":{},"data":data})))
    + ">Reset</a></li>\r\n                </ul>\r\n            </div>\r\n            <a class=\"btn btn-primary\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "injectItem", {"name":"action","hash":{},"data":data})))
    + ">\r\n                <i class=\"fa fa-fire\"></i>&nbsp;Inject Log Message\r\n            </a>\r\n";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.admin.logMessage", "new", {"name":"link-to","hash":{
    'classNames': ("btn btn-success")
  },"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "            <a class=\"btn btn-info\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "refresh", true, true, {"name":"action","hash":{},"data":data})))
    + ">\r\n                <i class=\"fa fa-refresh\"></i>&nbsp;Refresh\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    "
    + escapeExpression(((helpers['pagination-display'] || (depth0 && depth0['pagination-display']) || helperMissing).call(depth0, {"name":"pagination-display","hash":{
    'pagination': ((depth0 != null ? depth0.paginationData : depth0)),
    'classNames': ("pagination-row clearfix m-bottom-sm")
  },"data":data})))
    + "\r\n\r\n    <div class=\"message-table table-responsive bg-light\">\r\n        <table class=\"table table-bordereds\">\r\n            <thead>\r\n                <tr class=\"bg-dark\">\r\n                    <th class=\"col-sm-3\">Created</th>\r\n                    <th class=\"col-sm-9\">Message</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.item : depth0), (depth0 != null ? depth0['in'] : depth0), (depth0 != null ? depth0.displayModel : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    "
    + escapeExpression(((helpers['pagination-display'] || (depth0 && depth0['pagination-display']) || helperMissing).call(depth0, {"name":"pagination-display","hash":{
    'pagination': ((depth0 != null ? depth0.paginationData : depth0)),
    'classNames': ("pagination-row clearfix m-bottom-sm")
  },"data":data})))
    + "\r\n\r\n</div>\r\n\r\n";
},"useData":true});