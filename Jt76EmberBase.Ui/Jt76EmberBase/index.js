Jt76EmberBase.IndexView = Ember.View.extend({
    templateName: "index"
});

Jt76EmberBase.IndexRoute = Ember.Route.extend({
    model: function () {
        var nFooterHeight = 32;
        var nHeaderHeight = 52;
        var nOverallPadding = 55;
        var nDesiredHeight = (window.innerHeight - (nFooterHeight + nHeaderHeight + nOverallPadding));

        var model = {
            height: nDesiredHeight,
            heightStyle: "min-height:" + nDesiredHeight + "px;"
        };
        return model;
    },
    setupController: function (controller, model) {
        Ember.Logger.info(model.height + "px to fill");
        controller.set("model", model);
    }
});

Jt76EmberBase.IndexController = Ember.ObjectController.extend({
    actions: {
    }
});