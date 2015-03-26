using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace Jt76EmberBase.Ui.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return View();
        }

        public ActionResult LockScreen()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return View();
        }

        //MVC Controller download file sample
        public FileStreamResult GetPdf()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            var strFileName = HttpContext.Server.MapPath(@"\Content\Files\sample.pdf");
            var bytes = System.IO.File.ReadAllBytes(strFileName);
            var stream = new MemoryStream(bytes);

            return new FileStreamResult(stream, "application/pdf")
            {
                FileDownloadName = "testpdf.pdf"
            };
        }

    }
}
