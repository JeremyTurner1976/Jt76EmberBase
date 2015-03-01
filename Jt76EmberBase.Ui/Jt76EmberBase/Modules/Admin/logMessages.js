Jt76EmberBase.IndexAdminLogMessagesView = Ember.View.extend({
    templateName: "Modules/Admin/logMessages"
});

Jt76EmberBase.IndexAdminLogMessagesRoute = Ember.Route.extend({
    model: function () {
        return Ember.$.getJSON('/api/v1/logMessages').then(function (data) {
            Ember.Logger.log(data);
            return data;
        });

        //return this.store.find("logMessage");
        //works great using the fixture adapter
        //gets errors from the api properly using RESTAdapter, but not mapped
    }
});

Jt76EmberBase.IndexAdminLogMessagesController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadAdminLogMessages();
        }
    }
});