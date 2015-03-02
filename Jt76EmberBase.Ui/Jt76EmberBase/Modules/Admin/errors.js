Jt76EmberBase.IndexAdminErrorsView = Ember.View.extend({
    templateName: "Modules/Admin/errors"
});

Jt76EmberBase.IndexAdminErrorsRoute = Ember.Route.extend({
    model: function () {
        //return Ember.$.getJSON('/api/v1/errors').then(function (data) {
        //    Ember.Logger.log(data);
        //    return data;
        //});

        return this.store.findAll("error");
        //works great using the fixture adapter
        //gets errors from the api properly using RESTAdapter, but not mapped
    }
});

Jt76EmberBase.IndexAdminErrorsController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadAdminErrors();
        }
    }
});