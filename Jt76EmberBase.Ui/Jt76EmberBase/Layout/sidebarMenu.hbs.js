var sidebarMenu = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "                    <span class=\"menu-content block\">\r\n                        <span class=\"menu-icon\"><i class=\"block fa fa-cloud fa-lg\"></i></span>\r\n                        <span class=\"text m-left-sm\">Dashboard</span>\r\n                    </span>\r\n                    <span class=\"menu-content-hover block\">\r\n                        Dash\r\n                    </span>\r\n";
  },"3":function(depth0,helpers,partials,data) {
  return "                            <span class=\"submenu-label\">Project One</span>\r\n";
  },"5":function(depth0,helpers,partials,data) {
  return "                            <span class=\"submenu-label\">Project Two</span>\r\n";
  },"7":function(depth0,helpers,partials,data) {
  return "                    <span class=\"menu-content block\">\r\n                        <span class=\"menu-icon\"><i class=\"block fa fa-star fa-lg\"></i></span>\r\n                        <span class=\"text m-left-sm\">About</span>\r\n                    </span>\r\n                    <span class=\"menu-content-hover block\">\r\n                        About\r\n                    </span>\r\n";
  },"9":function(depth0,helpers,partials,data) {
  return "                    <span class=\"menu-content block\">\r\n                        <span class=\"menu-icon\"><i class=\"block fa fa-envelope fa-lg\"></i></span>\r\n                        <span class=\"text m-left-sm\">Contact</span>\r\n                    </span>\r\n                    <span class=\"menu-content-hover block\">\r\n                        Contact\r\n                    </span>\r\n";
  },"11":function(depth0,helpers,partials,data) {
  return "                            Dashboard\r\n";
  },"13":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <span class=\"badge badge-warning m-right-xs\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.vm : depth0)) != null ? stack1.errorsCount : stack1), depth0))
    + "</span>\r\n                            Errors\r\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <span class=\"badge badge-info m-right-xs\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.vm : depth0)) != null ? stack1.logMessagesCount : stack1), depth0))
    + "</span>\r\n                            Log Messages\r\n";
},"17":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <span class=\"badge badge-success m-right-xs\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.vm : depth0)) != null ? stack1.usersCount : stack1), depth0))
    + "</span>\r\n                            User Admin\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "﻿<aside class=\"sidebar-menu\">\r\n    <div class=\"sidebar-inner\">\r\n\r\n        <div class=\"main-menu\">\r\n            <ul class=\"accordion sidebar-accordion\">\r\n                <li class=\"bg-palette-bluegreen active\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "toggleSidebar", {"name":"action","hash":{},"data":data})))
    + ">\r\n";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.dashboard", {"name":"link-to","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </li>\r\n\r\n                <li class=\"openable bg-palette-light-green\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "toggleSidebarOpenable", "Projects", {"name":"action","hash":{},"data":data})))
    + ">\r\n                    <a>\r\n                        <span class=\"menu-content block\">\r\n                            <span class=\"menu-icon\"><i class=\"block fa fa-picture-o fa-lg\"></i></span>\r\n                            <span class=\"text m-left-sm\">Projects</span>\r\n                            <span class=\"submenu-icon\"></span>\r\n                        </span>\r\n                        <span class=\"menu-content-hover block\">\r\n                            Projects\r\n                        </span>\r\n                    </a>\r\n                    <ul class=\"submenu bg-palette-light-green\">\r\n                        <li "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "toggleSidebar", {"name":"action","hash":{},"data":data})))
    + ">\r\n";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.projects.projectOne", {"name":"link-to","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        </li>\r\n                        <li "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "toggleSidebar", {"name":"action","hash":{},"data":data})))
    + ">\r\n";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.projects.projectTwo", {"name":"link-to","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        </li>\r\n                    </ul>\r\n                </li>\r\n\r\n                <li class=\"bg-palette-dark-blue\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "toggleSidebar", {"name":"action","hash":{},"data":data})))
    + ">\r\n";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.about", {"name":"link-to","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </li>\r\n\r\n                <li class=\"bg-palette-light-blue\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "toggleSidebar", {"name":"action","hash":{},"data":data})))
    + ">\r\n";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.contact", {"name":"link-to","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </li>\r\n\r\n\r\n                <li class=\"openable bg-palette-red\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "toggleSidebarOpenable", "Admin", {"name":"action","hash":{},"data":data})))
    + ">\r\n                    <a>\r\n                        <span class=\"menu-content block\">\r\n                            <span class=\"menu-icon\"><i class=\"block fa fa-bolt fa-lg\"></i></span>\r\n                            <span class=\"text m-left-sm\">Admin</span>\r\n                            <span class=\"submenu-icon\"></span>\r\n                        </span>\r\n                        <span class=\"menu-content-hover block\">\r\n                            Admin\r\n                        </span>\r\n                    </a>\r\n                    <ul class=\"submenu bg-palette4\">\r\n                        <li "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "toggleSidebar", {"name":"action","hash":{},"data":data})))
    + ">\r\n";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.admin.dashboard", {"name":"link-to","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        </li>\r\n                        <li "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "toggleSidebar", {"name":"action","hash":{},"data":data})))
    + ">\r\n";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.admin.errors", {"name":"link-to","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        </li>\r\n                        <li "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "toggleSidebar", {"name":"action","hash":{},"data":data})))
    + ">\r\n";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.admin.logMessages", {"name":"link-to","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        </li>\r\n                        <li "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "toggleSidebar", {"name":"action","hash":{},"data":data})))
    + ">\r\n";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index.admin.userAdmin", {"name":"link-to","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"sidebar-fix-bottom clearfix\">\r\n            <div class=\"user-dropdown dropup pull-left\">\r\n                <a href=\"#\" class=\"dropdown-toggle font-18\" data-toggle=\"dropdown\">\r\n                    <i class=\"ion-person\"></i>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                        <a>\r\n                            <i class=\"fa fa-edit fa-lg\"></i><span class=\"m-left-xs\">My Profile</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a>\r\n                            <i class=\"fa fa-power-off fa-lg\"></i><span class=\"m-left-xs\">Sign out</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <a href=\"/Home/Lockscreen\" class=\"pull-right font-18\"><i class=\"ion-log-out\"></i></a>\r\n        </div>\r\n    </div>\r\n\r\n</aside>\r\n";
},"useData":true});