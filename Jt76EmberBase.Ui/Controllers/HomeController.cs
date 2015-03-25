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

        public FileStreamResult GetPdfResponse()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            var filestream = System.IO.File.ReadAllBytes(@"C:\Users\JTurner\Desktop\testpdf.pdf");
            var stream = new MemoryStream(filestream);

            return new FileStreamResult(stream, "application/pdf")
            {
                FileDownloadName = "testpdf.pdf"
            };
        }

    }
}
