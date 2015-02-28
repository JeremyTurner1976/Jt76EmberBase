//MODELS
Jt76EmberBase.Log = DS.Model.extend({
    strEntry: DS.attr("string"),
    user: DS.belongsTo("user"),
    dtCreated: DS.attr("date")
});

Jt76EmberBase.Membership = DS.Model.extend({
    user: DS.belongsTo("user"),
    role: DS.belongsTo("role"),
    dtCreated: DS.attr("date")
});

Jt76EmberBase.Note = DS.Model.extend({
    strNote: DS.attr("string"),
    strEnteredBy: DS.attr("string"),
    user: DS.belongsTo("user"),
    dtCreated: DS.attr("date")
});

Jt76EmberBase.Role = DS.Model.extend({
    strName: DS.attr("string"),
    membership: DS.hasMany("membership"),
    dtCreated: DS.attr("date")
});

Jt76EmberBase.User = DS.Model.extend({
    strEmail: DS.attr("string"),
    strUserName: DS.attr("string"),
    strFirst: DS.attr("string"),
    strLast: DS.attr("string"),
    logs: DS.hasMany("log", { async: true }),
    notes: DS.hasMany("note", { async: true }),
    membership: DS.hasMany("membership"),
    dtCreated: DS.attr("date")
});

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

