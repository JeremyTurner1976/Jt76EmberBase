Jt76EmberBase.IndexDashboardView = Ember.View.extend({
    templateName: "Modules/Dashboard/dashboard"
});

Jt76EmberBase.IndexDashboardRoute = Ember.Route.extend({
    model: function () {
        var data = this.store.all("weatherService");
        return (data.get("content").length === 0) ? this.store.find("weatherService") : data;
    },
    setupController: function (controller, model) {
        Ember.Logger.info(model.get("content")[0].get("data"));
        controller.set("model", model);
    }
});

Jt76EmberBase.IndexDashboardController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            var model = this.get("model");
            model.reload();
        }
    }
});