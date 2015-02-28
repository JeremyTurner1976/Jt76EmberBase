//PARTIALS
Jt76EmberBase.BreadcrumbView = Ember.View.extend({
    templateName: "breadcrumbs",
    strPageTitle: "",
    showPageLink: Ember.computed.any("strPageTitle") //A computed property that returns the first truthy value from a list of dependent properties
});

