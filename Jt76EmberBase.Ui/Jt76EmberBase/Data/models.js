//MODELS
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

