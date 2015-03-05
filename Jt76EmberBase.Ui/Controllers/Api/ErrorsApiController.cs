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

            errors = errors
                .OrderByDescending(x => x.DtCreated).ThenByDescending(x => x.Id);

            //_uiService.LogMessage(errors.Count() + " different errors loaded");

            return new {errors};
        }

        [Route("api/v1/errors")]
        public HttpResponseMessage Post([FromBody] Error newError)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //var requestUri = Request.RequestUri;

            if (newError.DtCreated == default(DateTime))
                newError.DtCreated = DateTime.UtcNow;

            if (_viewModel.AddError(newError)) //force valid datatype
            {
                //200 success
                //_uiService.LogMessage(newError.StrMessage + " - Successfully saved");
                return Request.CreateResponse(HttpStatusCode.Created, newError);
            }

            //400 error
            //_uiService.LogMessage(newError.StrMessage + " - Was unable to save");
            return Request.CreateResponse(HttpStatusCode.BadRequest);
        }
    }
}