using System;
using System.Collections.Generic;
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
        public IEnumerable<LogMessage> Get()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //var requestUri = Request.RequestUri;

            IQueryable<LogMessage> logMessages = _viewModel.GetLogMessages();

            logMessages = logMessages
                .OrderByDescending(x => x.DtCreated);

            //_uiService.LogMessage(logMessages.Count() + " different LogMessages loaded");

            return logMessages;
        }

        [Route("api/v1/logMessages")]
        public HttpResponseMessage Post([FromBody] LogMessage newLogMessage)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //var requestUri = Request.RequestUri;

            if (newLogMessage.DtCreated == default(DateTime))
                newLogMessage.DtCreated = DateTime.UtcNow;

            if (_viewModel.AddLogMessage(newLogMessage.StrLogMessage)) //force valid datatype
            {
                //200 success
                //_uiService.LogMessage(newLogMessage.StrLogMessage + " - Successfully saved");
                return Request.CreateResponse(HttpStatusCode.Created, newLogMessage);
            }

            //400 LogMessage
            //_uiService.LogMessage(newLogMessage.StrLogMessage + " - Was unable to save");
            return Request.CreateResponse(HttpStatusCode.BadRequest);
        }
    }
}