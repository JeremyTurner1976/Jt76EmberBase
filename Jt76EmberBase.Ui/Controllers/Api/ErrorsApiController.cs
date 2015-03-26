using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;
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
        [System.Web.Http.Route("api/v1/errors")]
        public Object Get()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;

            var errors = _viewModel.GetErrors();
            return new { errors };
        }


        [System.Web.Http.Route("GetPdfResponse")]
        public HttpResponseMessage GetPdfResponse()
        {

            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //Web Api
            byte[] bytes = System.IO.File.ReadAllBytes(@"C:\Users\JTurner\Desktop\testpdf.pdf");

            try
            {
                var result = new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new ByteArrayContent(bytes)
                };
                result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");
                result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("inline")
                {
                    FileName = "testpdf.pdf"
                };
                return result;
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError);
            }

        }


        [System.Web.Http.Route("api/v1/errors")]
        public HttpResponseMessage Post([FromBody] dynamic model)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;

            var error = CreateJItem(model["error"]);

            return _viewModel.AddError(error) ? 
                Request.CreateResponse(HttpStatusCode.Created, new { error }) : 
                Request.CreateResponse(HttpStatusCode.BadRequest);
        }

        [System.Web.Http.Route("api/v1/errors/{id}")]
        public Object Get(int id)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;

            var error = _viewModel.GetErrors().FirstOrDefault(x => x.Id == id);
            return new { error };
        }


        [System.Web.Http.Route("api/v1/errors/{id}")]
        public HttpResponseMessage Put([FromBody] dynamic model, int id)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;
            var error = CreateJItem(model["error"]);
            error.Id = id;

            return _viewModel.UpdateError(error) ?
                Request.CreateResponse(HttpStatusCode.Created, true) :
                Request.CreateResponse(HttpStatusCode.BadRequest);
        }

        [System.Web.Http.Route("api/v1/errors/{id}")]
        public HttpResponseMessage Delete(int id)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            //var requestUri = Request.RequestUri;

            return _viewModel.DeleteError(id) ? 
                Request.CreateResponse(HttpStatusCode.Accepted, true) : 
                Request.CreateResponse(HttpStatusCode.BadRequest);
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