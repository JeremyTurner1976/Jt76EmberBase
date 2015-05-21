//create the route
//routes job is to get the model
//routes use modelFor to get route models, Controllers use needs to get other controllers

window.Jt76EmberBase = Ember.Application.create({
    rootElement: "#jt76emberbase-app", //This will only apply to elements in the dom with this id
    //Note that views appended to the DOM outside the root element will not receive events.
    LOG_TRANSITIONS: true, // basic logging of successful transitions
    LOG_TRANSITIONS_INTERNAL: false, // detailed logging of all routing steps
    LOG_VIEW_LOOKUPS: false,
    LOG_ACTIVE_GENERATION: false
});

//App load begins
Ember.Application.initializer({
    //register application dependencies here
    name: "Common Setup",

    initialize: function (container, application) {
        //setup common utility classes here
        Jt76EmberBase.Common = Jt76EmberBase.CommonFunctions.create();
        Jt76EmberBase.CONFIG = Jt76EmberBase.ConfigDeclarations.create();
        Jt76EmberBase.Location = Jt76EmberBase.Jt76GeoLocation.create();

        Ember.Logger.info("Application Initialized.");
    }
});



//App loaded
Jt76EmberBase.ApplicationRoute = Ember.Route.extend({
    activate: function () {
        //prime the application here, called on refresh also
        //can get application required data here like dropdownlist content from Web API

        Ember.Logger.debug(Jt76EmberBase);
        Ember.Logger.debug(Ember);

        Ember.Logger.info("Application Activated.");

        //set the homepage
        if (Jt76EmberBase.CONFIG.bDebug === false) {
            var self = this;
            setTimeout(function () {
                self.transitionTo(Jt76EmberBase.CONFIG.get("strHomePage"));
            }, 250); //give the dom time to set then transition to the landing page
        }
    },

    actions: {
        openModal: function (modalName, model) {
            this.controllerFor(modalName).set("model", model);
            return this.render(modalName, {
                into: "application",
                outlet: "modal"
            });
        },
        closeModal: function () {
            return this.disconnectOutlet({
                outlet: "modal",
                parentView: "application"
            });
        }
    }

});

