using System.Diagnostics;
using System.Net;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Jt76EmberBase.Ui.Controllers
{
    public class ErrorsController : Controller
    {
        private readonly IUiService _uiService;

        public ErrorsController(IUiService uiService)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            _uiService = uiService;
        }

        public HttpResponseException General(HttpException ex)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            string strHtmlError = ex.GetBaseException().ToString();
            @ViewBag.strError = strHtmlError;

            //return View("Error");
            return new HttpResponseException(HttpStatusCode.InternalServerError);
        }

        public ActionResult Http404()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return Content("Not found", "text/plain");
        }

        public ActionResult Http403()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return Content("Forbidden", "text/plain");
        }
    }
}