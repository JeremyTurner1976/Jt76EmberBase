Jt76EmberBase.IndexDashboardView = Ember.View.extend({
    templateName: "Modules/Dashboard/dashboard"
});

Jt76EmberBase.IndexDashboardRoute = Ember.Route.extend({
    //setupController: function (controller) {
    //    controller.loadDashboard();
    //}
    //renderTemplate: function() {
    //    //outlet: "#jt76emberbase-dashboard";
    //}
    model: function() {
        return Ember.$.getJSON('/api/v1/errors').then(function(data) {
            console.log(data);
            return data;
        });
        //return this.store.find('error');
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