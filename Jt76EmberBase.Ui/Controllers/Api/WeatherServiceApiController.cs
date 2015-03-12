using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Runtime.Remoting.Messaging;
using System.Web.Http;
using System.Web.UI.WebControls;
using Antlr.Runtime.Misc;
using ForecastIO;
using Newtonsoft.Json.Linq;

namespace Jt76EmberBase.Ui.Controllers.Api
{
    public class WeatherServiceApiController : ApiController
    {
        private readonly IUiService _uiService;
        private readonly UiViewModel _viewModel;

        public WeatherServiceApiController(UiViewModel viewModel, IUiService uiService)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            _viewModel = viewModel;
            _uiService = uiService;
        }

        //Ember expects a singular store.find() call, alter the route as below to plural
        [Route("api/v1/weatherServices")]
        public object Get(float fLatitude = 47.4886f, float fLongitude = -117.5786f)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //NOTE:
            //The first thousand API calls you make every day are free, period.
            //Every API call after that costs $0.0001 each.
            //Credit us with a “Powered by Forecast” badge that links to http://forecast.io/ wherever you display data from the API.
            //https://api.forecast.io/forecast/ec8fab02bc1bf58c04e74c58bc2c3525/47.4886,-117.5786

            //https://github.com/f0xy/forecast.io-csharp  // API Key, Lat, Long, Unit
            var request = new ForecastIORequest("ec8fab02bc1bf58c04e74c58bc2c3525", fLatitude, fLongitude, ForecastIO.Unit.us);
            var response = request.Get();

            var strSummary = response.daily.summary;
            var currently = response.currently;

            List<DailyForecast> tempList = new ListStack<DailyForecast>();
            tempList.AddRange(response.daily.data);

            //Ember Data expects a JSon array and an id in all returns
            const int id = 1;
            var currentWeather = new { currently.summary, currently.icon, currently.temperature };
            var dailyWeather = tempList.AsQueryable().Select(x => new { x.summary, x.icon, x.temperatureMin, x.temperatureMinTime, x.temperatureMax, x.temperatureMaxTime }).ToList();

            var data = new {id, strSummary, currentWeather, dailyWeather};
            var weatherService = new List<object>() { data }.AsEnumerable();

            return new {weatherService};
        }
    }
}
