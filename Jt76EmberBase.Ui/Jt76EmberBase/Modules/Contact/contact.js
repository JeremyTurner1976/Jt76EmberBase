Jt76EmberBase.IndexContactView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Contact/contact"
});

Jt76EmberBase.IndexContactRoute = Jt76EmberBase.BaseRoute.extend({
});

Jt76EmberBase.IndexContactController = Ember.ObjectController.extend({
    strPageTitle: "Contact Jt76",
    strSubHeader: "Always open to suggestions.",
    strUserName: "",
    strUserEmail: "",
    strUserMessage: "",
    bInValid: function () {
        return !(Jt76EmberBase.Common.isValidLength(this.get("strUserName"), 10, 255) 
                //&& Jt76EmberBase.Common.isValidEmail(this.get("strUserEmail")
                && Jt76EmberBase.Common.isValidLength(this.get("strUserMessage"), 25, 8000));
    }.property("strUserName", "strUserMessage"),

    actions: {
        send: function() {
            
        }
    }
});