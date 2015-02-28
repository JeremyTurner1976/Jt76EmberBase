using System;
using System.Diagnostics;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Autofac;
using Jt76EmberBase.Ui.Controllers;

namespace Jt76EmberBase.Ui
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AutofacConfig.RegisterAutofac();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        //In Global.asax to catch all errors
        //At this point the only C# try catch logic wanted is when logging an error, or wanting to skip a minor exception
        protected void Application_Error(object sender, EventArgs e)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            Exception ex = Server.GetLastError();

            using (var scope = AutofacConfig.Container.BeginLifetimeScope())
            {
                var uiService = scope.Resolve<IUiService>();
                uiService.HandleError(ex); ;
            }

            Server.ClearError();

            RedirectToErrorPage(ex);
        }

        private void RedirectToErrorPage(Exception ex)
        {
            var httpException = ex as HttpException;

            var routeData = new RouteData();
            routeData.Values["controller"] = "Errors";
            routeData.Values["action"] = "General";
            routeData.Values["exception"] = httpException;

            //Production: Handle any specific Http errors with custom views

            //Response.StatusCode = 500;

            //if (httpException != null)
            //{
            //    Response.StatusCode = httpException.GetHttpCode();
            //    switch (Response.StatusCode)
            //    {
            //        case 403:
            //            routeData.Values["action"] = "Http403";
            //            break;
            //        case 404:
            //            routeData.Values["action"] = "Http404";
            //            break;
            //    }
            //}

            using (var scope = AutofacConfig.Container.BeginLifetimeScope())
            {
                var uiService = scope.Resolve<IUiService>();
                IController errorsController = new ErrorsController(uiService);
                var requestContext = new RequestContext(new HttpContextWrapper(Context), routeData);
                errorsController.Execute(requestContext);
            }
        }
    }
}
