﻿var contact = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿"
    + escapeExpression(((helpers['page-header'] || (depth0 && depth0['page-header']) || helperMissing).call(depth0, {"name":"page-header","hash":{
    'strSubHeader': ((depth0 != null ? depth0.strSubHeader : depth0)),
    'strPageTitle': ((depth0 != null ? depth0.strPageTitle : depth0))
  },"data":data})))
    + "\r\n\r\n<div class=\"inbox-body p-top-xs\">\r\n    <div class=\"sign-in-wrapper jt76-padding-sides-sm\">\r\n        <div class=\"sign-in-inner\">\r\n            <form name=\"Form\" novalidate>\r\n\r\n                <div class=\"login-brand text-center no-m-bottom\">\r\n                    <i class=\"fa fa-bug m-right-xs\"></i> Contact <strong class=\"text-skin brand-name\">Jt76</strong>\r\n                </div>\r\n\r\n                <div class=\"form-group m-bottom-md m-top-xs\">\r\n                    <input name=\"strUserName\" type=\"text\" class=\"form-control\"\r\n                           placeholder=\"Your Callsign\" data-ng-model=\"vm.email.strUserName\"\r\n                           required data-ng-minlength=\"5\" data-ng-maxlength=\"100\" />\r\n                    <span class=\"jt76-error\" data-ng-show=\"Form.strUserName.$error.required\">Required</span>\r\n                    <span class=\"jt76-error\" data-ng-show=\"Form.strUserName.$error.minlength\">Minimum 5 Characters</span>\r\n                    <span class=\"jt76-error\" data-ng-show=\"Form.strUserName.$error.maxlength\">Maximum 100 Characters</span>\r\n                </div>\r\n                <div class=\"form-group m-bottom-md\">\r\n                    <input name=\"strUserEmail\" type=\"email\" class=\"form-control\"\r\n                           placeholder=\"Email Address\" data-ng-model=\"vm.email.strUserEmail\" />\r\n                    <span class=\"jt76-error\" data-ng-show=\"Form.strUserEmail.$error.email\">Not a valid email</span>\r\n                </div>\r\n                <div class=\"form-group m-bottom-md\">\r\n                    <textarea rows=\"12\" name=\"strMessage\" class=\"form-control\"\r\n                              placeholder=\"Send me a message\" data-ng-model=\"vm.email.strMessage\"\r\n                              required data-ng-minlength=\"15\" data-ng-maxlength=\"1500\"></textarea>\r\n                    <span class=\"jt76-error\" data-ng-show=\"Form.strMessage.$error.required\">Required</span>\r\n                    <span class=\"jt76-error\" data-ng-show=\"Form.strMessage.$error.minlength\">Minimum 15 Characters</span>\r\n                    <span class=\"jt76-error\" data-ng-show=\"Form.strMessage.$error.maxlength\">Maximum 1500 Characters</span>\r\n                </div>\r\n\r\n                <div class=\"m-top-md p-top-sm m-bottom-md\">\r\n                    <a class=\"btn btn-success block\" data-ng-click=\"vm.sendEmail()\" data-ng-disabled=\"Form.$invalid\">Send</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
},"useData":true});