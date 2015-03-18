Jt76EmberBase.IndexAdminErrorDetailsView = Ember.View.extend({
    /*__Template Name__*/
    templateName: "Modules/Admin/errorDetails",
    /*__End Template Name__*/

    willInsertElement: function () {
        var self = this.$();
        self.addClass("jt76-loading-slide");
    },
    didInsertElement: function () {
        var self = this.$();
        setTimeout(function () {
            self.removeClass("jt76-loading-slide");
            self.addClass("jt76-loaded-slide");
        }, 50); //give the dom time to set the jt76-loading class then switch it
    }
});

Jt76EmberBase.IndexAdminErrorDetailsRoute = Ember.Route.extend({
    model: function (params) {
        if (params.id === "new")
            return this.store.createRecord("error");
        else
            return this.store.find("error", params.id);
    },
    setupController: function (controller, model) {
        Ember.Logger.info(model);
        controller.set("model", model);
    },
    deactivate: function() {
        var model = this.get("controller.model");
        //model.get("isSaving");
        //model.get("isDirty");
        if (model.get("isNew")) {
            model.deleteRecord();
        }
    }
});

Jt76EmberBase.IndexAdminErrorDetailsController = Ember.ObjectController.extend({
    actions: {
    }
});