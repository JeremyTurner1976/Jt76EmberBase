var projectTwo = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿"
    + escapeExpression(((helpers['page-header'] || (depth0 && depth0['page-header']) || helperMissing).call(depth0, {"name":"page-header","hash":{
    'strSubHeader': ((depth0 != null ? depth0.strSubHeader : depth0)),
    'strPageTitle': ((depth0 != null ? depth0.strPageTitle : depth0))
  },"data":data})))
    + "\r\n\r\n<p>TEST PROJECT TWO</p>";
},"useData":true});