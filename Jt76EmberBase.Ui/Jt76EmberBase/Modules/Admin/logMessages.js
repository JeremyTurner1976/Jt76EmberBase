Jt76EmberBase.IndexAdminLogMessagesView = Ember.View.extend({
    templateName: "Modules/Admin/logMessages"
});

Jt76EmberBase.IndexAdminLogMessagesRoute = Ember.Route.extend({
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

Jt76EmberBase.IndexAdminLogMessagesController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadAdminLogMessages();
        }
    }
});