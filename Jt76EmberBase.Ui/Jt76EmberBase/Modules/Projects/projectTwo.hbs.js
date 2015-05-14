var projectTwo = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿"
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "pageHeader", {"name":"partial","hash":{},"data":data})))
    + "\r\n\r\n<p>Some Controls</p>\r\n\r\n"
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.Jt76EmberBase : depth0)) != null ? stack1.DateField : stack1), {"name":"view","hash":{
    'dateBinding': ("startDate")
  },"data":data})))
    + "&nbsp;is&nbsp;"
    + escapeExpression(((helpers.fromDate || (depth0 && depth0.fromDate) || helperMissing).call(depth0, (depth0 != null ? depth0.startDate : depth0), {"name":"fromDate","hash":{},"data":data})))
    + " \r\n<button "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, (depth0 != null ? depth0.setToToday : depth0), {"name":"action","hash":{},"data":data})))
    + ">Set To Today</button>\r\n";
},"useData":true});