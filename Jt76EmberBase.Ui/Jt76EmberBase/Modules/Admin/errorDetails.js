Jt76EmberBase.IndexAdminErrorDetailsView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Admin/errorDetails"
});

Jt76EmberBase.IndexAdminErrorDetailsRoute = Jt76EmberBase.SingleItemRoute.extend({
    strModel: "error"
});

Jt76EmberBase.IndexAdminErrorDetailsController = Jt76EmberBase.SingleItemController.extend({
    strPageTitle: "Admin Error",
    strSubHeader: "Handle your business.",

    needs: ["indexAdminErrors"],
    strParentController: "indexAdminErrors",
    strParentRoute: "index.admin.errors",

    bInValid: function () {
        return !Jt76EmberBase.ErrorValidation.create().isValid(this.get("model"));
    }.property( "model.strMessage",
                "model.strSource",
                "model.strErrorLevel",
                "model.strAdditionalInformation",
                "model.strStackTrace"),


    needs: ["indexAdminErrors"],
    actions: {
        prevItem: function() {
            return this.advanceItem(-1);
        },
        nextItem: function() {
            //alert(this.index);
            return this.advanceItem(1);
        }
    },
    advanceItem: function(delta) {
        var items = this.get("controllers.indexAdminErrors");
        var length = items.get("length");
        var index = (items.indexOf(this.get("model")) + delta + length) % length;
        if (index === NaN || index === 0)
            index = 1;

        return this.transitionToRoute("index.admin.errorDetails", items.objectAt(index));
    }

});