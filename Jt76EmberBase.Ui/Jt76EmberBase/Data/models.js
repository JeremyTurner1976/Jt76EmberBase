//MODELS - NOTE: If property types are not supplied, they will be implied by Ember
//Jt76EmberBase.Sample = DS.Model.extend({
//    string: DS.attr("string"),
//    date: DS.attr("date"),
//    number: DS.attr("number"),
//
//
////The items below will always be linked by the id (or array of ids) as number values
//    ownedModels: DS.hasMany("model", {async: true}), //async allows lazy loading
//    OwnerModel: DS.belongsTo("OwnerModel");
//});

Jt76EmberBase.Error = DS.Model.extend({
    strMessage: DS.attr("string"),
    strSource: DS.attr("string"),
    strErrorLevel: DS.attr("string"),
    strAdditionalInformation: DS.attr("string"),
    strStackTrace: DS.attr("string"),
    dtCreated: DS.attr("date")
});

Jt76EmberBase.LogMessage = DS.Model.extend({
    strLogMessage: DS.attr("string"),
    dtCreated: DS.attr("date")
});

Jt76EmberBase.WeatherService = DS.Model.extend({
    strSummary: DS.attr("string"),
    currentWeather: DS.attr(),
    dailyWeather: DS.attr()
});

//{ "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "temperature": 28.76 }

//{ "summary": "Mostly cloudy throughout the day.", "icon": "partly-cloudy-day", "temperatureMin": 21.34, "temperatureMinTime": 1425218400, "temperatureMax": 44.84, "temperatureMaxTime": 1425250800 }

