var pagination_display = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "﻿<div class=\"pull-left hidden-xs clearfix\"><em>Showing "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.pagination : depth0)) != null ? stack1.nFilteredCount : stack1), depth0))
    + " / "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.pagination : depth0)) != null ? stack1.nTotalCount : stack1), depth0))
    + " items</em></div>\r\n\r\n<ul class=\"pagination pull-right clearfix\" "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'style': ("pagination.strPagingVisibility")
  },"data":data})))
    + ">\r\n    <li><a>First</a></li>\r\n    <li><a>Prev</a></li>\r\n    <li class=\"active\"><a>1</a></li>\r\n    <li><a>2</a></li>\r\n    <li><a>3</a></li>\r\n    <li><a>4</a></li>\r\n    <li><a>5</a></li>\r\n    <li><a>Next</a></li>\r\n    <li><a>Last</a></li>\r\n</ul>\r\n\r\n<div class=\"pull-right clearfix m-right-sm\" "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'style': ("pagination.strPagingVisibility")
  },"data":data})))
    + "><strong>Page "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.pagination : depth0)) != null ? stack1.nCurrentPage : stack1), depth0))
    + " of "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.pagination : depth0)) != null ? stack1.nMaxPages : stack1), depth0))
    + "</strong></div>\r\n<div class=\"pull-right clearfix m-right-sm\" "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'style': ("pagination.strSearchVisibility")
  },"data":data})))
    + "><strong>Search Mode</strong></div>";
},"useData":true});