var logMessages = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "                <tr>\r\n                    <td class=\"col-sm-2\">\r\n                        <div class=\"jt76-multiline\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strCreated : stack1), depth0))
    + "</div>\r\n                    </td>\r\n                    <td class=\"col-sm-10 jt76-no-select\">\r\n";
  stack1 = ((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.Jt76EmberBase : depth0)) != null ? stack1.ExpandingSingleItemView : stack1), {"name":"view","hash":{
    'nMaxLength': (160),
    'strText': (((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strLogMessage : stack1))
  },"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </td>\r\n                </tr>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                        ";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.admin.logMessage", (depth0 != null ? depth0.item : depth0), {"name":"link-to","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.view : depth0)) != null ? stack1.jt76ReadMore : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"jt76-title-link\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.view : depth0)) != null ? stack1.formattedText : stack1), depth0))
    + "</div>";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                        <span class=\"text-success\">Read";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.view : depth0)) != null ? stack1.jt76IsExpanded : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\r\n";
},"6":function(depth0,helpers,partials,data) {
  return " Less ";
  },"8":function(depth0,helpers,partials,data) {
  return " More ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "﻿"
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "pageHeader", {"name":"partial","hash":{},"data":data})))
    + "\r\n\r\n<div class=\"inbox-body jt76-padding-sides-md p-top-xs\">\r\n\r\n    "
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "arrayButtonSet", {"name":"partial","hash":{},"data":data})))
    + "\r\n\r\n    "
    + escapeExpression(((helpers['pagination-display'] || (depth0 && depth0['pagination-display']) || helperMissing).call(depth0, {"name":"pagination-display","hash":{
    'pagination': ((depth0 != null ? depth0.paginationData : depth0)),
    'classNames': ("pagination-row clearfix m-bottom-sm")
  },"data":data})))
    + "\r\n\r\n    <div class=\"message-table table-responsive bg-light\">\r\n        <table class=\"table table-bordereds\">\r\n            <thead>\r\n                <tr class=\"bg-dark\">\r\n                    <th class=\"col-sm-3\">Created</th>\r\n                    <th class=\"col-sm-9\">Message</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.item : depth0), (depth0 != null ? depth0['in'] : depth0), (depth0 != null ? depth0.displayModel : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    "
    + escapeExpression(((helpers['pagination-display'] || (depth0 && depth0['pagination-display']) || helperMissing).call(depth0, {"name":"pagination-display","hash":{
    'pagination': ((depth0 != null ? depth0.paginationData : depth0)),
    'classNames': ("pagination-row clearfix m-bottom-sm")
  },"data":data})))
    + "\r\n\r\n</div>\r\n\r\n";
},"useData":true});