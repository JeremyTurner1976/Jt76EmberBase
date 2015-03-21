﻿var logMessage = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿"
    + escapeExpression(((helpers['page-header'] || (depth0 && depth0['page-header']) || helperMissing).call(depth0, {"name":"page-header","hash":{
    'strSubHeader': ((depth0 != null ? depth0.strSubHeader : depth0)),
    'strPageTitle': ((depth0 != null ? depth0.strPageTitle : depth0))
  },"data":data})))
    + "\r\n\r\n<div class=\"inbox-body jt76-padding-sides-xlg p-top-xs\">\r\n    <div class=\"row jt76-padding-sides-md\">\r\n\r\n        <div class=\"smart-widget m-top-sm widget-dark-blue\">\r\n            <div class=\"smart-widget-header\">\r\n                Log\r\n                <span class=\"smart-widget-option\" style=\"margin-top:-6px\">\r\n                    "
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "singleItemButtonSet", {"name":"partial","hash":{},"data":data})))
    + "\r\n                </span>\r\n            </div>\r\n            <div class=\"smart-widget-inner\">\r\n                <div class=\"smart-widget-body\">\r\n                    <form name=\"Form\" novalidate>\r\n                        <div class=\"form-group\">\r\n                            <label aria-for=\"strMessage\">Message</label>\r\n                            "
    + escapeExpression(((helpers.textarea || (depth0 && depth0.textarea) || helperMissing).call(depth0, {"name":"textarea","hash":{
    'rows': ("6"),
    'placeHolder': ("Enter Message"),
    'class': ("form-control"),
    'valueBinding': ("strLogMessage")
  },"data":data})))
    + "\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strMessage.$error.required\">Required</span>\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strMessage.$error.minlength\">Minimum 10 Characters</span>\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strMessage.$error.maxlength\">Maximum 255 Characters</span>\r\n                        </div>\r\n                    </form>\r\n\r\n                    "
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "singleItemButtonSet", {"name":"partial","hash":{},"data":data})))
    + "\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true});