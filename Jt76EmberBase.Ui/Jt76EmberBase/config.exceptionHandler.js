////Not fully implemented- Have not got RSVP to link in yet
////throw new Error("Message","Cause","Stacktrace"); to throw an exception in code.
Ember.onerror = function (e) {
    Jt76EmberBase.Common.log(e.message, e, "warning", Jt76EmberBase.CONFIG.bDebug);
    Ember.Logger.error(e.stack);
    Jt76EmberBase.Common.logToDatabase("error", e);
    setTimeout(function () {
        if (Jt76EmberBase.CONFIG.bDebug === false)
            window.location.href = "";
    }, 5000);
};