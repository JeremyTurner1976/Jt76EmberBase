////Not fully implemented- Have not got RSVP to link in yet
////throw new Error("Message","Cause","Stacktrace"); to throw an exception in code.
Ember.onerror = function (e) {
    var common = Jt76EmberBase.Common.create();
    common.log(e.message, e, "warning", Jt76EmberBase.CONFIG.create().get("bDebug"));
    Ember.Logger.error(e.stack);
    common.logToDatabase("error", e);
};