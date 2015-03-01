Jt76EmberBase.IndexDashboardView = Ember.View.extend({
    templateName: "Modules/Dashboard/dashboard"
});

Jt76EmberBase.IndexDashboardRoute = Ember.Route.extend({
    //setupController: function (controller) {
    //    controller.loadDashboard();
    //},
    //renderTemplate: function () {
    //    this.render({ outlet: "main" });
    //},
    model: function() {
        return Ember.$.getJSON("/api/v1/weatherService").then(function(data) {
            Ember.Logger.info(data);
            return data;
        });

        //return this.store.findAll('error');
        //gets errors from the api properly, but not mapped

        //ember array helpers
        //data.forEach(function(item){
        //});

        //data.findBy("paramName", key);
    }
});

Jt76EmberBase.IndexDashboardController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadDashboard();
        }
    }
});