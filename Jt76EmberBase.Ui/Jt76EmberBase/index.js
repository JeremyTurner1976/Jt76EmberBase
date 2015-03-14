Jt76EmberBase.IndexView = Ember.View.extend({
    templateName: "index"
});

Jt76EmberBase.IndexRoute = Ember.Route.extend({
    //model: function () {
    //},
    //setupController: function (controller, model) {
    //    controller.set("model", model);
    //}
});

Jt76EmberBase.IndexController = Ember.ObjectController.extend({
    bIsLoaded: true,
    strHeightStyle: function() {
        var nFooterHeight = 32;
        var nHeaderHeight = 52;
        var nOverallPadding = 55;
        var nDesiredHeight = (window.innerHeight - (nFooterHeight + nHeaderHeight + nOverallPadding));

        //min-height of the application
        if (nDesiredHeight < 450)
            nDesiredHeight = 450;

        return "min-height:" + nDesiredHeight + "px;";
    }.property(),
    //actions: {
    //}
});