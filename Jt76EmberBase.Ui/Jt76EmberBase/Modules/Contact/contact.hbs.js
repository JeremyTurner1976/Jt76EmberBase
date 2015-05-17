var contact = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿"
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "pageHeader", {"name":"partial","hash":{},"data":data})))
    + "\r\n\r\n<div class=\"inbox-body p-top-xs\">\r\n    <div class=\"sign-in-wrapper jt76-padding-sides-sm\">\r\n        <div class=\"sign-in-inner\">\r\n            <form id=\"form\">\r\n\r\n                <div class=\"login-brand text-center no-m-bottom\">\r\n                    <i class=\"fa fa-bug m-right-xs\"></i> Contact <strong class=\"text-skin brand-name\">Jt76</strong>\r\n                </div>\r\n\r\n                <div class=\"form-group m-bottom-md m-top-xs\">\r\n                    "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'placeholder': ("Your Callsign"),
    'class': ("form-control"),
    'value': ((depth0 != null ? depth0.strUserName : depth0))
  },"data":data})))
    + "\r\n                    <span class=\"jt76-error\">"
    + escapeExpression(((helpers.RequiredLength || (depth0 && depth0.RequiredLength) || helperMissing).call(depth0, (depth0 != null ? depth0.strUserName : depth0), 10, 255, {"name":"RequiredLength","hash":{},"data":data})))
    + "</span>\r\n                </div>\r\n                <div class=\"form-group m-bottom-md\">\r\n                    "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'placeholder': ("Email Address"),
    'class': ("form-control"),
    'value': ((depth0 != null ? depth0.strUserEmail : depth0))
  },"data":data})))
    + "\r\n                    <span class=\"jt76-error\">"
    + escapeExpression(((helpers.EmailField || (depth0 && depth0.EmailField) || helperMissing).call(depth0, (depth0 != null ? depth0.strUserEmail : depth0), "false", {"name":"EmailField","hash":{},"data":data})))
    + "</span>\r\n                </div>\r\n                <div class=\"form-group m-bottom-md\">\r\n                    "
    + escapeExpression(((helpers.textarea || (depth0 && depth0.textarea) || helperMissing).call(depth0, {"name":"textarea","hash":{
    'rows': ("6"),
    'placeholder': ("Send me a message"),
    'class': ("form-control"),
    'valueBinding': ("strUserMessage")
  },"data":data})))
    + "\r\n                    <span class=\"jt76-error\">"
    + escapeExpression(((helpers.RequiredLength || (depth0 && depth0.RequiredLength) || helperMissing).call(depth0, (depth0 != null ? depth0.strUserMessage : depth0), 25, 8000, {"name":"RequiredLength","hash":{},"data":data})))
    + "</span>\r\n                </div>\r\n\r\n\r\n                <div class=\"m-top-md p-top-sm m-bottom-md\">\r\n                    <a "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "send", {"name":"action","hash":{},"data":data})))
    + "\r\n                            "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'disabled': ("bInValid"),
    'class': (":btn :btn-primary :jt76-padding-sides-sm :block")
  },"data":data})))
    + ">\r\n                        <i class=\"fa fa-envelope-o\"></i>&nbsp;Send\r\n                    </a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
},"useData":true});