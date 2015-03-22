var dashboard = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "        <div class=\"col-md-3\">\r\n            <div class=\"panel panel-default weather-widget\">\r\n                <div "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': ("item.strClass")
  },"data":data})))
    + ">\r\n                    <div class=\"h4 text-white text-center\" style=\"height: 30px\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.dtLocalDay : stack1), depth0))
    + "'s Weather</div>\r\n                    <div class=\"m-top-md m-bottom-md text-center\">\r\n                        "
    + escapeExpression(((helpers['canvas-skycon'] || (depth0 && depth0['canvas-skycon']) || helperMissing).call(depth0, {"name":"canvas-skycon","hash":{
    'strIcon': (((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.icon : stack1))
  },"data":data})))
    + "\r\n                    </div>\r\n                    <div class=\"degree-text text-center\">Max: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.temperatureMax : stack1), depth0))
    + "° at "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.dtLocalMax : stack1), depth0))
    + "</div>\r\n                    <div class=\"degree-text text-center\">Min: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.temperatureMin : stack1), depth0))
    + "° at "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.dtLocalMin : stack1), depth0))
    + "</div>\r\n                </div>\r\n                <div class=\"panel-footer bg-white text-center padding-md\">\r\n                    <div class=\"h4 text-upper\">\r\n                        Cheney <i class=\"fa fa-map-marker\"></i>\r\n                    </div>\r\n                    <div class=\"text-muted font-12 m-top-xs\" style=\"height: 40px\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.summary : stack1), depth0))
    + "</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "﻿"
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "pageHeader", {"name":"partial","hash":{},"data":data})))
    + "\r\n\r\n<div class=\"inbox-body jt76-padding-sides-xlg p-top-xs\" data-ng-controller=\"dashboard as vm\">\r\n    <div class=\"row jt76-padding-sides-md\">\r\n        <div class=\"statistic-box bg-grey padding-sm\">\r\n            <div class=\"statistic-box bg-info jt76-clickable-element m-left-lg m-right-lg\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "refresh", {"name":"action","hash":{},"data":data})))
    + ">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"statistic-title\">\r\n                        Current Temperature\r\n                    </div>\r\n                    <div class=\"statistic-value\">\r\n                        "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.mappedModel : depth0)) != null ? stack1.currentWeather : stack1)) != null ? stack1.temperature : stack1), depth0))
    + "°\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"statistic-title\">\r\n                        This Week\r\n                    </div>\r\n                    "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.mappedModel : depth0)) != null ? stack1.strSummary : stack1), depth0))
    + "\r\n                </div>\r\n                <div class=\"statistic-icon-background\">\r\n                    <i class=\"ion-ios7-cloud\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <br />\r\n    <div class=\"row \">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.item : depth0), (depth0 != null ? depth0['in'] : depth0), ((stack1 = (depth0 != null ? depth0.mappedModel : depth0)) != null ? stack1.dailyWeather : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n</div>\r\n\r\n\r\n";
},"useData":true});