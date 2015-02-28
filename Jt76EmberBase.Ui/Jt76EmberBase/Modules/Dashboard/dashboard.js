Jt76EmberBase.DashboardView = Ember.View.extend({
    rootElement: "#jt76emberbase-dashboard",
    templateName: "Modules/Dashboard/dashboard"
});

Jt76EmberBase.DashboardRoute = Ember.Route.extend({
    //setupController: function (controller) {
    //    controller.loadDashboard();
    //}
});

Jt76EmberBase.DashboardController = Ember.ObjectController.extend({
    model: function () {
        return Ember.$.get('/api/v1/errors').then(function(data) {
            //here is where you would convert your xml to a JS object
            console.log(data); //can return an actual html error page
            return data;
        });
    }.property('model'),

    actions: {
        refresh: function () {
            this.loadDashboard();
        }
    }
});