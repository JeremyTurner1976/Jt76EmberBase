//PARTIALS
Jt76EmberBase.BreadcrumbView = Ember.View.extend({
    templateName: "breadcrumbs",
    strPageTitle: "",
    showPageLink: Ember.computed.any("strPageTitle") //A computed property that returns the first truthy value from a list of dependent properties
});

Jt76EmberBase.PaginationView = Ember.View.extend({
    nPageItems: 5,
    nFilteredCount: "1",
    nTotalCount: "5",
    nCurrentPage: "2",
    nPageCount: "10",
    nMaxPagesToShow: "",
    strVisibilityStyle: "visible;",
    pageChanged: function (page) {
        alert("page changed");
    }
});

