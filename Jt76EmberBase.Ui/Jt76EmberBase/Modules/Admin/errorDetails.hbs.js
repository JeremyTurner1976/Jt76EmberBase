﻿var errorDetails = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿<div class=\"inbox-body jt76-padding-sides-xlg p-top-xs\">\r\n    <div class=\"row jt76-padding-sides-md\">\r\n\r\n        <div class=\"smart-widget m-top-sm widget-dark-blue\">\r\n            <div class=\"smart-widget-header\">\r\n                Error\r\n                <span class=\"smart-widget-option\">\r\n\r\n                    <button class=\"btn btn-info btn-sm jt76-padding-sides-sm\"\r\n                            "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "goBack", {"name":"action","hash":{},"data":data})))
    + " "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': ("bModelHasChanges:jt76-visible:jt76-hidden")
  },"data":data})))
    + ">\r\n                        <i class=\"fa fa-backward\"></i>&nbsp;Back\r\n                    </button>\r\n                    <button class=\"btn btn-info btn-sm jt76-padding-sides-sm dissolve-animation ng-hide\"\r\n                            data-ng-show=\"vm.hasChanges\"\r\n                            data-ng-click=\"vm.cancel()\">\r\n                        <i class=\"fa fa-ban\"></i>&nbsp;Cancel\r\n                    </button>\r\n                    <button class=\"btn btn-primary btn-sm jt76-padding-sides-sm\"\r\n                            data-ng-click=\"vm.save()\"\r\n                            data-ng-disabled=\"!vm.canSave\">\r\n                        <i class=\"fa fa-save\"></i>&nbsp;Save\r\n                    </button>\r\n                    <button class=\"btn btn-danger btn-sm jt76-padding-sides-sm\"\r\n                            data-ng-show=\"vm.bShowDelete\"\r\n                            data-ng-click=\"vm.deleteError()\">\r\n                        <i class=\"fa fa-minus\"></i>&nbsp;Delete\r\n                    </button>\r\n                    <span class=\"dissolve-animation ng-hide\" data-ng-show=\"vm.hasChanges\">\r\n                        <i class=\"fa fa-asterisk\" data-ng-show=\"vm.bShowDelete\"></i>\r\n                    </span>\r\n\r\n                </span>\r\n            </div>\r\n            <div class=\"smart-widget-inner\">\r\n                <div class=\"smart-widget-body\">\r\n                    <form name=\"Form\" novalidate>\r\n                        <div class=\"form-group\">\r\n                            <label aria-for=\"strMessage\">Message</label>\r\n                            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'placeHolder': ("Enter Message"),
    'class': ("form-control"),
    'value': ((depth0 != null ? depth0.strMessage : depth0))
  },"data":data})))
    + "\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strMessage.$error.required\">Required</span>\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strMessage.$error.minlength\">Minimum 10 Characters</span>\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strMessage.$error.maxlength\">Maximum 255 Characters</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label aria-for=\"strErrorLevel\">Level</label>\r\n                            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'placeHolder': ("Enter Error Level"),
    'class': ("form-control"),
    'value': ((depth0 != null ? depth0.strErrorLevel : depth0))
  },"data":data})))
    + "\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strErrorLevel.$error.required\">Required</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label aria-for=\"strSource\">Source</label>\r\n                            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'placeHolder': ("Enter Source"),
    'class': ("form-control"),
    'value': ((depth0 != null ? depth0.strSource : depth0))
  },"data":data})))
    + "\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strSource.$error.required\">Required</span>\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strSource.$error.minlength\">Minimum 5 Characters</span>\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strSource.$error.maxlength\">Maximum 255 Characters</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label aria-for=\"strAdditionalInformation\">Additional Information</label>\r\n                            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'placeHolder': ("Enter Additional Information"),
    'class': ("form-control"),
    'value': ((depth0 != null ? depth0.strAdditionalInformation : depth0))
  },"data":data})))
    + "\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strAdditionalInformation.$error.required\">Required</span>\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strAdditionalInformation.$error.minlength\">Minimum 5 Characters</span>\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strAdditionalInformation.$error.maxlength\">Maximum 255 Characters</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label aria-for=\"strStackTrace\">Stack Trace</label>\r\n                            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'placeHolder': ("Enter Stack Trace"),
    'class': ("form-control"),
    'value': ((depth0 != null ? depth0.strStackTrace : depth0))
  },"data":data})))
    + "\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strStackTrace.$error.required\">Required</span>\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strStackTrace.$error.minlength\">Minimum 5 Characters</span>\r\n                            <span class=\"jt76-error\" data-ng-show=\"Form.strStackTrace.$error.maxlength\">Maximum 4000 Characters</span>\r\n                        </div>\r\n                    </form>\r\n\r\n                    <button class=\"btn btn-info btn-sm jt76-padding-sides-sm dissolve-animation ng-hide\"\r\n                            data-ng-show=\"!vm.hasChanges\"\r\n                            data-ng-click=\"vm.goBack()\">\r\n                        <i class=\"fa fa-backward\"></i>&nbsp;Back\r\n                    </button>\r\n                    <button class=\"btn btn-info btn-sm jt76-padding-sides-sm dissolve-animation ng-hide\"\r\n                            data-ng-show=\"vm.hasChanges\"\r\n                            data-ng-click=\"vm.cancel()\">\r\n                        <i class=\"fa fa-ban\"></i>&nbsp;Cancel\r\n                    </button>\r\n                    <button class=\"btn btn-primary btn-sm jt76-padding-sides-sm\"\r\n                            data-ng-click=\"vm.save()\"\r\n                            data-ng-disabled=\"!vm.canSave\">\r\n                        <i class=\"fa fa-save\"></i>&nbsp;Save\r\n                    </button>\r\n                    <button class=\"btn btn-danger btn-sm jt76-padding-sides-sm\"\r\n                            data-ng-show=\"vm.bShowDelete\"\r\n                            data-ng-click=\"vm.deleteError()\">\r\n                        <i class=\"fa fa-minus\"></i>&nbsp;Delete\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true});