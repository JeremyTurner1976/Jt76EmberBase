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
            return new { errors };
        }

        [Route("api/v1/errors")]
        public HttpResponseMessage Post([FromBody] dynamic model)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;

            var error = CreateJItem(model["error"]);

            return _viewModel.AddError(error) ? 
                Request.CreateResponse(HttpStatusCode.Created, new { error }) : 
                Request.CreateResponse(HttpStatusCode.BadRequest);
        }

        [Route("api/v1/errors/{id}")]
        public HttpResponseMessage Put([FromBody] dynamic model, int id)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;
            var error = CreateJItem(model["error"]);
            error.Id = id;

            return _viewModel.UpdateError(error) ?
                Request.CreateResponse(HttpStatusCode.Created, true) :
                Request.CreateResponse(HttpStatusCode.BadRequest, false);
        }

        [Route("api/v1/errors/{id}")]
        public HttpResponseMessage Delete(int id)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;

            return _viewModel.DeleteError(id) ? 
                Request.CreateResponse(HttpStatusCode.Accepted, true) : 
                Request.CreateResponse(HttpStatusCode.BadRequest, false);
        }


        private static Error CreateJItem(dynamic jItem)
        {
            var error = new Error
            {
                DtCreated = jItem.dtCreated == null ? DateTime.UtcNow : DateTime.Parse(jItem.dtCreated.ToString()),
                StrAdditionalInformation = jItem.strAdditionalInformation,
                StrErrorLevel = jItem.strErrorLevel,
                StrMessage = jItem.strMessage,
                StrSource = jItem.strSource,
                StrStackTrace = jItem.strStackTrace
            };

            return error;
        }
    }
}