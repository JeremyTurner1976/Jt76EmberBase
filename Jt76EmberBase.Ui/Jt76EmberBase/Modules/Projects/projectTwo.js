Jt76EmberBase.IndexProjectsProjectTwoView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Projects/projectTwo"
});

Jt76EmberBase.IndexProjectsProjectTwoRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        this.controllerFor("index").set("bIsLoaded", true);
    }
});

Jt76EmberBase.IndexProjectsProjectTwoController = Ember.ObjectController.extend({
    strPageTitle: "Project Two",
    strSubHeader: "A placeholder for some more future content."
});