﻿var application = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿"
    + escapeExpression(((helper = (helper = helpers.outlet || (depth0 != null ? depth0.outlet : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"outlet","hash":{},"data":data}) : helper)))
    + "\r\n"
    + escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, "modal", {"name":"outlet","hash":{},"data":data})))
    + "\r\n";
},"useData":true});