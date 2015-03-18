//create the route
//routes job is to get the model
//routes use modelFor to get route models, Controllers use needs to get other controllers

window.Jt76EmberBase = Ember.Application.create({
    rootElement: "#jt76emberbase-app", //This will only apply to elements in the dom with this id
    //Note that views appended to the DOM outside the root element will not receive events.
    LOG_TRANSITIONS: true//, // basic logging of successful transitions
    //LOG_TRANSITIONS_INTERNAL: true // detailed logging of all routing steps
});

//App load begins
Ember.Application.initializer({
    //register application dependencies here (Not implemented, just stubbed)
    name: 'logger',

    initialize: function (container, application) {
        application.register('function:logger', function (message) {
            alert(message);
        });
        Ember.Logger.log("Application Initialized.");
    }
});

//App loaded
Jt76EmberBase.ApplicationRoute = Ember.Route.extend({
    activate: function () {
        //prime the application here, called on refresh also
        //can get application required data here like dropdownlist content from Web API

        Ember.Logger.log("Test logger");
        Ember.Logger.debug("Test debug logger");
        Ember.Logger.error("Test error logger", "testCause", "testStack");
        Ember.Logger.info("Test info logger");
        Ember.Logger.warn("Test warning logger");

        Ember.Logger.debug(Jt76EmberBase);
        Ember.Logger.debug(Ember);

        Ember.Logger.log("Application Activated.");
        this.transitionTo("index.admin.dashboard");
    }
});

