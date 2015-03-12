var pagination_display = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "        <li "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': ("item.className")
  },"data":data})))
    + ">\r\n            <a "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "gotoPage", (depth0 != null ? depth0.item : depth0), {"name":"action","hash":{},"data":data})))
    + ">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.nPageNumber : stack1), depth0))
    + "</a>\r\n        </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "﻿<div style=\"padding-top:3px;\">\r\n    <div class=\"pull-left hidden-xs\"><em>Showing "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.pagination : depth0)) != null ? stack1.nFilteredCount : stack1), depth0))
    + " / "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.pagination : depth0)) != null ? stack1.nTotalCount : stack1), depth0))
    + " items</em></div>\r\n\r\n\r\n    <ul class=\"pagination pagination-sm pull-right\" style=\"min-width:338px; margin-right:-16px\">\r\n        <li><a "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "gotoPage", "First", {"name":"action","hash":{},"data":data})))
    + ">First</a></li>\r\n        <li "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': ("prevClassName")
  },"data":data})))
    + "><a "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "gotoPage", "Prev", {"name":"action","hash":{},"data":data})))
    + ">Prev</a></li>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.item : depth0), (depth0 != null ? depth0['in'] : depth0), (depth0 != null ? depth0.visiblePages : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        <li "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': ("nextClassName")
  },"data":data})))
    + "><a "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "gotoPage", "Next", {"name":"action","hash":{},"data":data})))
    + " "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'disabled': ((depth0 != null ? depth0.bNextDisabled : depth0))
  },"data":data})))
    + ">Next</a></li>\r\n        <li><a "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "gotoPage", "Last", {"name":"action","hash":{},"data":data})))
    + ">Last</a></li>\r\n    </ul>\r\n\r\n    <div class=\"pull-right m-right-sm\"><strong>Page "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.pagination : depth0)) != null ? stack1.nCurrentPage : stack1), depth0))
    + " of "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.pagination : depth0)) != null ? stack1.nMaxPages : stack1), depth0))
    + "</strong></div>\r\n</div>\r\n";
},"useData":true});