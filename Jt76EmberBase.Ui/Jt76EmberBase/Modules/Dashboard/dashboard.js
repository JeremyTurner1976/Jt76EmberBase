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
        //var data = this.store.find("weatherService");
        //Ember.Logger.info(data);
        //return data;
        //TODO I do not want to alter the controller name to weatherServices and return an array of weatherService objects
        //find an example of an object return ember data likes that does not need to be an array
        //although this may be the convention over design
    }
});

Jt76EmberBase.IndexDashboardController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadDashboard();
        }
    }
});