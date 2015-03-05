Jt76EmberBase.IndexAdminCustomErrorView = Ember.View.extend({
    templateName: "Modules/Admin/customError"
});

Jt76EmberBase.IndexAdminCustomErrorRoute = Ember.Route.extend({
    model: function (params) {
        return params.data;

        //return Ember.$.getJSON('/api/v1/errors/' + params.id).then(function (data) {
        //    Ember.Logger.log(data);
        //    return data;
        //});
        //return this.store.find("error", params.id);
    }
});

Jt76EmberBase.IndexAdminCustomErrorController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadAdminError();
        }
    }
});