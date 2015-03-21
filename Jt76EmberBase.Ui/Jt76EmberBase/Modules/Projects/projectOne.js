Jt76EmberBase.IndexProjectsProjectOneView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Projects/projectOne"
});

Jt76EmberBase.IndexProjectsProjectOneRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        this.controllerFor("index").set("bIsLoaded", true);
    }
});

Jt76EmberBase.IndexProjectsProjectOneController = Ember.ObjectController.extend({
    strPageTitle: "Project One",
    strSubHeader: "A placeholder for future content."
});