Jt76EmberBase.IndexDashboardView = Ember.View.extend({
    templateName: "Modules/Dashboard/dashboard"
});

Jt76EmberBase.IndexDashboardRoute = Ember.Route.extend({
    model: function() {
        //return Ember.$.getJSON("/api/v1/weatherService").then(function(data) {
        //    Ember.Logger.info(data);
        //    return data;
        //});

        //ember data expects an array
        var data = this.store.find("weatherService");
        return data;
    },
    setupController: function (controller, model) {
        controller.set("model", model);
    }
});

Jt76EmberBase.IndexDashboardController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadDashboard();
        }
    }
});