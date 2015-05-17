var errorDetails = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿"
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "pageHeader", {"name":"partial","hash":{},"data":data})))
    + "\r\n\r\n<div class=\"inbox-body jt76-padding-sides-xlg p-top-xs\">\r\n    <div class=\"row jt76-padding-sides-md\">\r\n\r\n        <div class=\"smart-widget m-top-sm widget-dark-blue\">\r\n            <div class=\"smart-widget-header\">\r\n                Error\r\n                <span class=\"smart-widget-option\" style=\"margin-top:-6px\">\r\n                    "
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "singleItemButtonSet", {"name":"partial","hash":{},"data":data})))
    + "\r\n                </span>\r\n            </div>\r\n            <div class=\"smart-widget-inner\">\r\n                <div class=\"smart-widget-body\">\r\n                    <form name=\"Form\" novalidate>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"jt76-label\">Message</label>\r\n                            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'placeholder': ("Enter Message"),
    'class': ("form-control"),
    'value': ((depth0 != null ? depth0.strMessage : depth0))
  },"data":data})))
    + "\r\n                            <span class=\"jt76-error\">"
    + escapeExpression(((helpers.RequiredLength || (depth0 && depth0.RequiredLength) || helperMissing).call(depth0, (depth0 != null ? depth0.strMessage : depth0), 10, 255, {"name":"RequiredLength","hash":{},"data":data})))
    + "</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"jt76-label\">Level</label>\r\n                            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'placeholder': ("Enter Error Level"),
    'class': ("form-control"),
    'value': ((depth0 != null ? depth0.strErrorLevel : depth0))
  },"data":data})))
    + "\r\n                            <span class=\"jt76-error\">"
    + escapeExpression(((helpers.Required || (depth0 && depth0.Required) || helperMissing).call(depth0, (depth0 != null ? depth0.strErrorLevel : depth0), {"name":"Required","hash":{},"data":data})))
    + "</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"jt76-label\">Source</label>\r\n                            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'placeholder': ("Enter Source"),
    'class': ("form-control"),
    'value': ((depth0 != null ? depth0.strSource : depth0))
  },"data":data})))
    + "\r\n                            <span class=\"jt76-error\">"
    + escapeExpression(((helpers.RequiredLength || (depth0 && depth0.RequiredLength) || helperMissing).call(depth0, (depth0 != null ? depth0.strSource : depth0), 5, 255, {"name":"RequiredLength","hash":{},"data":data})))
    + "</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"jt76-label\">Additional Information</label>\r\n                            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'placeholder': ("Enter Additional Information"),
    'class': ("form-control"),
    'value': ((depth0 != null ? depth0.strAdditionalInformation : depth0))
  },"data":data})))
    + "\r\n                            <span class=\"jt76-error\">"
    + escapeExpression(((helpers.RequiredLength || (depth0 && depth0.RequiredLength) || helperMissing).call(depth0, (depth0 != null ? depth0.strAdditionalInformation : depth0), 5, 255, {"name":"RequiredLength","hash":{},"data":data})))
    + "</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"jt76-label\">Stack Trace</label>\r\n                            "
    + escapeExpression(((helpers.textarea || (depth0 && depth0.textarea) || helperMissing).call(depth0, {"name":"textarea","hash":{
    'rows': ("6"),
    'placeholder': ("Enter Stack Trace"),
    'class': ("form-control"),
    'valueBinding': ("strStackTrace")
  },"data":data})))
    + "\r\n                            <span class=\"jt76-error\">"
    + escapeExpression(((helpers.RequiredLength || (depth0 && depth0.RequiredLength) || helperMissing).call(depth0, (depth0 != null ? depth0.strStackTrace : depth0), 5, 4000, {"name":"RequiredLength","hash":{},"data":data})))
    + "</span>\r\n                        </div>\r\n                    </form>\r\n\r\n                    "
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "singleItemButtonSet", {"name":"partial","hash":{},"data":data})))
    + "\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true});