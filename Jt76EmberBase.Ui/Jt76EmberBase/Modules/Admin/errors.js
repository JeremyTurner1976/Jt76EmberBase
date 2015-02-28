Jt76EmberBase.IndexAdminErrorsView = Ember.View.extend({
    templateName: "Modules/Admin/errors"
});

Jt76EmberBase.IndexAdminErrorsRoute = Ember.Route.extend({
    model: function () {
        return Ember.$.getJSON('/api/v1/errors').then(function (data) {
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

Jt76EmberBase.IndexAdminErrorsController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadAdminErrors();
        }
    }
});