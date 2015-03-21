using System.Diagnostics;
using System.Linq;
using System.Web.Optimization;
using HandlebarsHelper;
using Microsoft.Ajax.Utilities;

namespace Jt76EmberBase.Ui
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            Debug.WriteLine("BundleConfig.RegisterBundles()");

            bundles.Add(new Bundle("~/bundles/jt76EmberBase/templates", new HandlebarsTransformer())
                .IncludeDirectory("~/Jt76EmberBase", "*.hbs", true)
            );

            //this must be true to get the template bundle handlebars helper creates
            BundleTable.EnableOptimizations = true;

            //PRODUCTION: Install WebEssentials VS tool to minify all files, and include only the minified versions here

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/bootstrap-theme.css",
                "~/Content/Vendor/font-awesome.css",
                "~/Content/Vendor/ionicons.css",
                "~/Content/Vendor/animate.css",
                "~/Content/toastr.css",
                "~/Content/Vendor/simplify.css",
                "~/Content/site.css"

                //"~/Content/morris.css.css",
                //"~/Content/datepicker.css",
                //"~/Content/owl.carousel.css",
                //"~/Content/owl.theme.default.min.css"
            ));

            bundles.Add(new ScriptBundle("~/bundles/wrapBootstrap").Include(
                "~/Scripts/jquery-1.11.1.js",
                "~/Scripts/bootstrap.js",
                "~/Scripts/skycons.js",
                "~/Scripts/modernizr.js",

                "~/Scripts/jquery.flot.min.js",
                "~/Scripts/jquery.flot.stack.js",

                "~/Scripts/morris.js",
                "~/Scripts/rapheal.js"//,

                //"~/Scripts/datepicker.js",
                //"~/Scripts/sparkline.js",
                //"~/Scripts/jquery.popupoverlay.js",
                //"~/Scripts/jquery.easypiechart.js",
                //"~/Scripts/jquery.sortable.js",
                //"~/Scripts/owl.carousel.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/ember").Include(
                "~/Scripts/handlebars-v2.0.0.js",
                "~/Scripts/ember-1.9.1.js",
                "~/Scripts/ember-data-1.14.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/thirdParty").Include(
                "~/Scripts/moment.js", //date and time handler
                "~/Scripts/toastr.js" //toaster
            ));

            //Ember App Directory  
            var appBundle = new ScriptBundle("~/bundles/jt76EmberBase").Include(
                "~/Jt76EmberBase/application.js",
                "~/Jt76EmberBase/index.js",
                "~/Jt76EmberBase/config.js",
                "~/Jt76EmberBase/config.exceptionHandler.js",
                "~/Jt76EmberBase/config.route.js",
                "~/Jt76EmberBase/Data/models.js"
            )
            .IncludeDirectory("~/Jt76EmberBase/Common", "*.js", true)
            .IncludeDirectory("~/Jt76EmberBase/components", "*.js", true)
            .IncludeDirectory("~/Jt76EmberBase/Data", "*.js", true)
            .IncludeDirectory("~/Jt76EmberBase/Layout", "*.js", true)
            .IncludeDirectory("~/Jt76EmberBase/Modules", "*.js", true);
            #if DEBUG
            //remove minification on this bundle in debug
            appBundle.Transforms.Clear();
            #endif
            bundles.Add(appBundle);
        }
    }
}
