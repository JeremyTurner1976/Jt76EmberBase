using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Web.Http;
using Jt76EmberBase.Data.Models;
using Newtonsoft.Json;

namespace Jt76EmberBase.Ui.Controllers.Api
{
    public class ErrorsApiController : ApiController
    {
        private readonly IUiService _uiService;
        private readonly UiViewModel _viewModel;

        public ErrorsApiController(UiViewModel viewModel, IUiService uiService)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            _viewModel = viewModel;
            _uiService = uiService;
        }

        //map verbs
        [Route("api/v1/errors")]
        public Object Get()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //var requestUri = Request.RequestUri;

            var errors = _viewModel.GetErrors();

            //errors = errors
            //    .OrderByDescending(x => x.DtCreated)
            //    .ThenByDescending(x => x.Id);

            //_uiService.LogMessage(errors.Count() + " different errors loaded");

            return new { errors };
        }

        [Route("api/v1/errors")]
        public HttpResponseMessage Post([FromBody] dynamic model)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;
            var jError = model["error"];
            var error = new Error
            {
                DtCreated = jError.dtCreated == null ? DateTime.UtcNow : DateTime.Parse(model["error"].dtCreated),
                StrAdditionalInformation = jError.strAdditionalInformation,
                StrErrorLevel = jError.strErrorLevel,
                StrMessage = jError.strMessage,
                StrSource = jError.strSource,
                StrStackTrace = jError.strStackTrace,
            };

            if (model["error"].id != null)
                error.Id = Int32.Parse(model["error"].id);

            if (_viewModel.AddError(error)) //force valid datatype
            {
                //200 success
                //_uiService.LogMessage(newError.StrMessage + " - Successfully saved");
                return Request.CreateResponse(HttpStatusCode.Created, new { error });
            }

            //400 error
            //_uiService.LogMessage(newError.StrMessage + " - Was unable to save");
            return Request.CreateResponse(HttpStatusCode.BadRequest);
        }
    }
}