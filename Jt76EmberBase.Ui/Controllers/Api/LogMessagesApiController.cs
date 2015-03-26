using System;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Web.Http;
using Jt76EmberBase.Data.Models;

namespace Jt76EmberBase.Ui.Controllers.Api
{
    public class LogMessagesApiController : ApiController
    {
        private readonly IUiService _uiService;
        private readonly UiViewModel _viewModel;

        public LogMessagesApiController(UiViewModel viewModel, IUiService uiService)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            _viewModel = viewModel;
            _uiService = uiService;
        }

        //map verbs
        [Route("api/v1/logMessages")]
        public Object Get()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;

            var logMessages = _viewModel.GetLogMessages();
            return new { logMessages };
        }

        [Route("api/v1/logMessages")]
        public HttpResponseMessage Post([FromBody] dynamic model)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;
            var logMessage = CreateJItem(model["logMessage"]);

            return _viewModel.AddLogMessage(logMessage) ? 
                Request.CreateResponse(HttpStatusCode.Created, new { logMessage }) : 
                Request.CreateResponse(HttpStatusCode.BadRequest);

        }

        [Route("api/v1/logMessages/{id}")]
        public Object Get(int id)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;

            var logMessage = _viewModel.GetLogMessages().FirstOrDefault(x => x.Id == id);
            return new { logMessage };
        }

        [Route("api/v1/logMessages/{id}")]
        public HttpResponseMessage Put([FromBody] dynamic model, int id)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;
            var logMessage = CreateJItem(model["logMessage"]);
            logMessage.Id = id;

            return _viewModel.UpdateLogMessage(logMessage) ?
                Request.CreateResponse(HttpStatusCode.Created, true) :
                Request.CreateResponse(HttpStatusCode.BadRequest);
        }


        [Route("api/v1/logMessages/{id}")]
        public HttpResponseMessage Delete(int id)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;

            return _viewModel.DeleteLogMessage(id) ? 
                Request.CreateResponse(HttpStatusCode.Accepted, true) : 
                Request.CreateResponse(HttpStatusCode.BadRequest);
        }


        private static LogMessage CreateJItem(dynamic jItem)
        {
            var logMessage = new LogMessage()
            {
                DtCreated = jItem.dtCreated == null ? DateTime.UtcNow : DateTime.Parse(jItem.dtCreated.ToString()),
                StrLogMessage = jItem.strLogMessage
            };

            return logMessage;
        }
    }
}