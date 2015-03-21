Jt76EmberBase.IndexContactView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Contact/contact"
});

Jt76EmberBase.IndexContactRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        this.controllerFor("index").set("bIsLoaded", true);
    }
});

Jt76EmberBase.IndexContactController = Ember.ObjectController.extend({
    strPageTitle: "Contact Jt76",
    strSubHeader: "Always open to suggestions."
});