using System.Diagnostics;
using System.Web.Mvc;
using System.Web.Routing;

namespace Jt76EmberBase.Ui
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            Debug.WriteLine("RouteConfig.RegisterRoutes()");

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("{resource}.config/{*pathInfo}");
            routes.IgnoreRoute("{resource}.js/{*pathInfo}");
            routes.IgnoreRoute("{resource}.img/{*pathInfo}");
            routes.IgnoreRoute("{resource}.css/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

        }
    }
}
