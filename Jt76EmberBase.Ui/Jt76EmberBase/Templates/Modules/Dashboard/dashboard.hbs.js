var dashboard = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.strMessage : stack1), depth0))
    + "<br />\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿<p>TEST DASHBOARD</p>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.item : depth0), (depth0 != null ? depth0['in'] : depth0), (depth0 != null ? depth0.model : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});