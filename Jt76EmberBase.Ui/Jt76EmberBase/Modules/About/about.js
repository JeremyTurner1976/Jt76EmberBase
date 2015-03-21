Jt76EmberBase.IndexAboutView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/About/about"
});

Jt76EmberBase.IndexAboutRoute = Ember.Route.extend({
});

Jt76EmberBase.IndexAboutController = Ember.ObjectController.extend({
    strPageTitle: "About Jt76",
    strSubHeader: "Just a short description of this site."
});