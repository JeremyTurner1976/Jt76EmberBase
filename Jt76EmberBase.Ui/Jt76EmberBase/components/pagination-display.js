Jt76EmberBase.PaginationDisplayComponent = Ember.Component.extend({
    visiblePages: function() {
        var pages = [];
        var nCurrentPage = this.get("pagination.nCurrentPage");
        var nMaxPagesToDisplay = this.get("pagination.nMaxPagesToDisplay");
        var nMaxPages = this.get("pagination.nMaxPages");

        var nListCap = nCurrentPage + nMaxPagesToDisplay - 1;
        var nStartDisplayPage = nCurrentPage;
        if (nCurrentPage + nMaxPagesToDisplay > nMaxPages) {
            nListCap = nMaxPages;
            nStartDisplayPage = nMaxPages - nMaxPagesToDisplay + 1;
        }

        for (var i = nStartDisplayPage; i <= nListCap; i++) {
            var pageInfo = {
                nPageNumber: i,
                className: (i === nCurrentPage) ? "active" : ""
            };
            pages.push(pageInfo);
        }
        return pages;
    }.property("pagination.nCurrentPage"),

    prevClassName: function () {
        return this.get("pagination.nCurrentPage") === 1 ? "disabled" : "";
    }.property("pagination.nCurrentPage"),

    nextClassName: function () {
        return this.get("pagination.nCurrentPage") === this.get("pagination.nMaxPages") ? "disabled" : "";
    }.property("pagination.nCurrentPage"),

    actions: {
        gotoPage: function (item) {
            if (item.nPageNumber)
                this.set("pagination.nCurrentPage", item.nPageNumber);
            else {
                switch(item) {
                    case "First":
                        this.set("pagination.nCurrentPage", 1);
                        break;
                    case "Prev":
                        if (this.get("pagination.nCurrentPage") - 1 >= 1)
                            this.set("pagination.nCurrentPage", this.get("pagination.nCurrentPage") - 1);
                        break;
                    case "Next":
                        if (this.get("pagination.nCurrentPage") + 1 <= this.get("pagination.nMaxPages"))
                            this.set("pagination.nCurrentPage", this.get("pagination.nCurrentPage") + 1);
                        break;
                    case "Last":
                        this.set("pagination.nCurrentPage", this.get("pagination.nMaxPages"));
                        break;
                    default:
                        throw new Error("Not all cases caught in components/pagination-display.js.");
                }
            }
        }
    }
});

//pagination object

//nFilteredCount: bInSearchMode ? this.get("nFilteredCount") : nMaxPageItemsToDisplay,
//nTotalCount: this.get("nTotalCount"),
//nCurrentPage: 1,
//nMaxPages: Math.ceil(this.get("nTotalCount") / nMaxPageItemsToDisplay),
//nMaxPagesToDisplay: 5,
//nMaxPageItemsToDisplay: nMaxPageItemsToDisplay,
//bInSearchMode: bInSearchMode