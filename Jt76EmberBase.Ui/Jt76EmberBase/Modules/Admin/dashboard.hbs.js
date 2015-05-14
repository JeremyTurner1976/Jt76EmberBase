﻿var dashboard = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿"
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "pageHeader", {"name":"partial","hash":{},"data":data})))
    + "\r\n\r\n<div class=\"inbox-body jt76-padding-sides-md p-top-xs\">\r\n    <div class=\"row m-top-md\">\r\n        <div class=\"col-lg-3 col-sm-6\">\r\n            <div class=\"statistic-box bg-danger m-bottom-md\">\r\n                <div class=\"statistic-title\">\r\n                    Today Visitors\r\n                </div>\r\n                <div class=\"statistic-value\">\r\n                    96.7k\r\n                </div>\r\n                <div class=\"m-top-md\">11% Higher than last week</div>\r\n                <div class=\"statistic-icon-background\">\r\n                    <i class=\"ion-eye\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-sm-6\">\r\n            <div class=\"statistic-box bg-info m-bottom-md\">\r\n                <div class=\"statistic-title\">\r\n                    Today Sales\r\n                </div>\r\n                <div class=\"statistic-value\">\r\n                    751\r\n                </div>\r\n                <div class=\"m-top-md\">8% Higher than last week</div>\r\n                <div class=\"statistic-icon-background\">\r\n                    <i class=\"ion-ios7-cart-outline\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-sm-6\">\r\n            <div class=\"statistic-box bg-purple m-bottom-md\">\r\n                <div class=\"statistic-title\">\r\n                    Today Users\r\n                </div>\r\n                <div class=\"statistic-value\">\r\n                    129\r\n                </div>\r\n                <div class=\"m-top-md\">3% Higher than last week</div>\r\n                <div class=\"statistic-icon-background\">\r\n                    <i class=\"ion-person-add\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-sm-6\">\r\n            <div class=\"statistic-box bg-success m-bottom-md\">\r\n                <div class=\"statistic-title\">\r\n                    Today Earnings\r\n                </div>\r\n                <div class=\"statistic-value\">\r\n                    $124.45k\r\n                </div>\r\n                <div class=\"m-top-md\">7% Higher than last week</div>\r\n                <div class=\"statistic-icon-background\">\r\n                    <i class=\"ion-stats-bars\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"smart-widget widget-dark-blue\">\r\n                <div class=\"smart-widget-header\">\r\n                    TOTAL VISITS\r\n                    <span class=\"smart-widget-option\">\r\n                        <a data-ng-click=\"vm.refreshBarGraph()\" class=\"jt76-clickable-element\">\r\n                            <i class=\"fa fa-refresh\"></i>\r\n                        </a>\r\n                    </span>\r\n                </div>\r\n                <div class=\"smart-widget-inner\">\r\n                    <div class=\"smart-widget-body no-padding\">\r\n                        <div class=\"padding-md font-semi-bold\">\r\n                            <div class=\"morris-chart\" id=\"totalSalesChart\" style=\"height: 250px; position: relative; padding-top: 2em;\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"bg-grey font-semi-bold\">\r\n                            <div class=\"row\" style=\"height: 75px; padding-top: .8em;\">\r\n                                <div class=\"col-xs-6\">\r\n\r\n                                </div>\r\n                                <div class=\"col-xs-6\">\r\n                                    <div class=\"morris-hover morris-default-style\">\r\n                                        <div class=\"morris-hover-row-label\">2014</div>\r\n                                        <div class=\"morris-hover-point\" style=\"color: rgb(153, 153, 153);\">\r\n                                            Total Visits:\r\n                                            100\r\n                                        </div>\r\n                                        <div class=\"morris-hover-point\" style=\"color: rgb(238, 238, 238);\">\r\n                                            Bounce Rate:\r\n                                            90\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"smart-widget widget-dark-blue\">\r\n                <div class=\"smart-widget-header\">\r\n                    TOTAL SALES\r\n                    <span class=\"smart-widget-option\">\r\n                        <a data-ng-click=\"vm.refreshPlotGraph()\" class=\"jt76-clickable-element\">\r\n                            <i class=\"fa fa-refresh\"></i>\r\n                        </a>\r\n                    </span>\r\n                </div>\r\n                <div class=\"smart-widget-inner\">\r\n                    <div class=\"smart-widget-body no-padding\">\r\n                        <div class=\"padding-md font-semi-bold\">\r\n                            <div id=\"placeholder\" style=\"padding: 0; height: 250px; position: relative;\"><canvas width=\"664\" height=\"375\" class=\"flot-base\" style=\"left: 0; top: 0; width: 443px; height: 250px; position: absolute; direction: ltr;\"></canvas><div class=\"flot-text\" style=\"left: 0; top: 0; right: 0; bottom: 0; color: rgb(84, 84, 84); font-size: smaller; position: absolute;\"><div class=\"flot-x-axis flot-x1-axis xAxis x1Axis\" style=\"left: 0; top: 0; right: 0; bottom: 0; display: block; position: absolute;\"><div class=\"flot-tick-label tickLabel\" style=\"left: 28px; top: 234px; text-align: center; position: absolute; max-width: 73px;\">0</div><div class=\"flot-tick-label tickLabel\" style=\"left: 109px; top: 234px; text-align: center; position: absolute; max-width: 73px;\">2</div><div class=\"flot-tick-label tickLabel\" style=\"left: 190px; top: 234px; text-align: center; position: absolute; max-width: 73px;\">4</div><div class=\"flot-tick-label tickLabel\" style=\"left: 270px; top: 234px; text-align: center; position: absolute; max-width: 73px;\">6</div><div class=\"flot-tick-label tickLabel\" style=\"left: 351px; top: 234px; text-align: center; position: absolute; max-width: 73px;\">8</div><div class=\"flot-tick-label tickLabel\" style=\"left: 430px; top: 234px; text-align: center; position: absolute; max-width: 73px;\">10</div></div><div class=\"flot-y-axis flot-y1-axis yAxis y1Axis\" style=\"left: 0; top: 0; right: 0; bottom: 0; display: block; position: absolute;\"><div class=\"flot-tick-label tickLabel\" style=\"left: 20px; top: 222px; text-align: right; position: absolute;\">0</div><div class=\"flot-tick-label tickLabel\" style=\"left: 8px; top: 167px; text-align: right; position: absolute;\">500</div><div class=\"flot-tick-label tickLabel\" style=\"left: 3px; top: 112px; text-align: right; position: absolute;\">1000</div><div class=\"flot-tick-label tickLabel\" style=\"left: 4px; top: 56px; text-align: right; position: absolute;\">1500</div><div class=\"flot-tick-label tickLabel\" style=\"left: 2px; top: 1px; text-align: right; position: absolute;\">2000</div></div></div><canvas width=\"664\" height=\"375\" class=\"flot-overlay\" style=\"left: 0; top: 0; width: 443px; height: 250px; position: absolute; direction: ltr;\"></canvas></div>\r\n                        </div>\r\n                        <div class=\"bg-grey\">\r\n                            <div class=\"row\" style=\"height: 75px\">\r\n                                <div class=\"col-xs-4 text-center\">\r\n                                    <h3 class=\"m-top-sm\">3491</h3>\r\n                                    <small class=\"m-bottom-sm block\">Total Sales</small>\r\n                                </div>\r\n                                <div class=\"col-xs-4 text-center\">\r\n                                    <h3 class=\"m-top-sm\">721</h3>\r\n                                    <small class=\"m-bottom-sm block\">New Orders</small>\r\n                                </div>\r\n                                <div class=\"col-xs-4 text-center\">\r\n                                    <h3 class=\"m-top-sm\">$8103</h3>\r\n                                    <small class=\"m-bottom-sm block\">Total Earnings</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
},"useData":true});