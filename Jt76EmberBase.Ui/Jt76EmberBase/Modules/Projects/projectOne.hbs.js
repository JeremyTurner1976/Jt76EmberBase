var projectOne = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿"
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "pageHeader", {"name":"partial","hash":{},"data":data})))
    + "\r\n\r\n<span class=\"jt76-underline h4\">Api File Sample Project</span>\r\n\r\n<div class=\"pull-right\">\r\n    <button "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "viewPdf", {"name":"action","hash":{},"data":data})))
    + "\r\n            "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': (":btn :btn-primary :btn-sm :jt76-padding-sides-lg :form-inline")
  },"data":data})))
    + ">\r\n        <i class=\"fa fa-picture-o\"></i>&nbsp;View PDF\r\n    </button>\r\n    <button "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "popupPdf", {"name":"action","hash":{},"data":data})))
    + "\r\n            "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': (":btn :btn-info :btn-sm :jt76-padding-sides-lg :form-inline")
  },"data":data})))
    + ">\r\n        <i class=\"fa fa-toggle-up\"></i>&nbsp;Popup PDF\r\n    </button>\r\n    <button "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "downloadPdf", {"name":"action","hash":{},"data":data})))
    + "\r\n            "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': (":btn :btn-success :btn-sm :jt76-padding-sides-lg :form-inline")
  },"data":data})))
    + ">\r\n        <i class=\"fa fa-folder-o\"></i>&nbsp;Download PDF\r\n    </button>\r\n</div>\r\n\r\n<hr />\r\n\r\n<span class=\"jt76-underline h4\">PDF Sharp Sample Project</span>\r\n\r\n<div class=\"pull-right\">\r\n    <button "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "viewCreatedPdf", {"name":"action","hash":{},"data":data})))
    + "\r\n            "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': (":btn :btn-primary :btn-sm :jt76-padding-sides-lg :form-inline")
  },"data":data})))
    + ">\r\n        <i class=\"fa fa-picture-o\"></i>&nbsp;View Created PDF\r\n    </button>\r\n</div>\r\n\r\n<hr />\r\n\r\n<div id=\"contentIframe\"></div>\r\n";
},"useData":true});