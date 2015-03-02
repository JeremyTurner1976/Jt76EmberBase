//MODELS - NOTE: If property types are not supplied, they will be implied by Ember
//Jt76EmberBase.Errors = DS.Model.extend({
//    error: DS.attr("string")
//});

//DS.attr("number")

Jt76EmberBase.Error = DS.Model.extend({
    strMessage: DS.attr("string"),
    strSource: DS.attr("string"),
    strErrorLevel: DS.attr("string"),
    strAdditionalInformation: DS.attr("string"),
    strStackTrace: DS.attr("string"),
    dtCreated: DS.attr("date")
});

//Jt76EmberBase.LogMessages = DS.Model.extend({
//    error: DS.attr("string")
//});

Jt76EmberBase.LogMessage = DS.Model.extend({
    strLogMessage: DS.attr("string"),
    dtCreated: DS.attr("date")
});

//Jt76EmberBase.WeatherService = DS.Model.extend({
//    strSummary: DS.attr("string"),
//    currentWeather: DS.attr("object"),
//    dailyWeather: DS.attr("object")
//});

