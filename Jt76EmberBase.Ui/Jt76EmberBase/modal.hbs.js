var modal = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "    <div id=\"modalContent\"></div>\r\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "﻿";
  stack1 = ((helpers['modal-dialog'] || (depth0 && depth0['modal-dialog']) || helperMissing).call(depth0, {"name":"modal-dialog","hash":{
    'action': ("close")
  },"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});