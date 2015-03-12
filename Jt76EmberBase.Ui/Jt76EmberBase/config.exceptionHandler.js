////Not fully implemented- Have not got RSVP to link in yet
////throw new Error("Message","Cause","Stacktrace"); to throw an exception in code.
//Ember.onerror = //function (e) {
//    var debug = Jt76EmberBase.CONFIG.create().get("debug");
//    //Ember.Logger.log("Debug is set to: " + debug);

//    if (debug) {
//        alert("Ember.OnError: " + e.toString());

//    }
//    //Ember.Logger.error(e);
//    // TODO log error to server
//};

//Ember.RSVP.configure('onerror', function (e) {
//    var debug = Jt76EmberBase.CONFIG.create().get("debug");
//    Ember.Logger.log("Debug is set to: " + debug);

//    if (debug) {
//        Ember.Logger.info(e);
//        Ember.Logger.error(e, "Jt76EmberBase", e.stack);
//        alert("Ember..RSVP.OnError: " );
//    }
//    // TODO log error to server
//});

Ember.RSVP.on('onerror', function (e) {
    var debug = Jt76EmberBase.CONFIG.create().get("debug");
    //Ember.Logger.log("Debug is set to: " + debug);

    if (debug) {
        Ember.Logger.info(e);
        Ember.Logger.error(e, "Jt76EmberBase", e.stack);
        alert("Ember..RSVP.OnError: ");
    }
    // TODO log error to server
});