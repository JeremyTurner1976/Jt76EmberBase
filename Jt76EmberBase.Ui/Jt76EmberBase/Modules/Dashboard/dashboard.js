Jt76EmberBase.IndexDashboardView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Dashboard/dashboard"
});

Jt76EmberBase.IndexDashboardRoute = Ember.Route.extend({
    model: function () {
        this.controllerFor("index").set("bIsLoaded", false);
        var data = this.store.all("weatherService");
        return (data.get("content").length === 0) ? this.store.find("weatherService") : data;
    },
    setupController: function (controller, model) {
        Ember.Logger.info(model.get("content")[0].get("data"));
        controller.set("model", model);
        this.controllerFor("index").set("bIsLoaded", true);
    }
});

Jt76EmberBase.IndexDashboardController = Ember.ObjectController.extend({
    strPageTitle: "Dashboard",
    strSubHeader: "Welcome Back, Jeremy Turner , <i class='fa fa-map-marker text-danger'></i> Cheney",
    actions: {
        refresh: function () {
            var model = this.get("model");
            model.reload();
        }
    }
});