Jt76EmberBase.IndexAdminLogMessagesLogMessageView = Ember.View.extend({
    templateName: "Modules/Admin/logMessage"
});

Jt76EmberBase.IndexAdminLogMessagesLogMessageRoute = Ember.Route.extend({
    model: function (params) {
        return params.data;

        //return Ember.$.getJSON('/api/v1/logMessages/' + params.id).then(function (data) {
        //    Ember.Logger.log(data);
        //    return data;
        //});
        //return this.store.find("logMessage", params.id);
    }
});

Jt76EmberBase.IndexAdminLogMessagesLogMessageController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadAdminLogMessage();
        }
    }
});