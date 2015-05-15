Jt76EmberBase.DateField = Ember.TextField.extend({
    type: "date",
    date: function (key, date) {
        if (date) {
            this.set("value", date.toISOString().substring(0, 10));
        } else {
            var value = this.get("value");
            if (value) {
                date = new Date(value);
            } else {
                date = null;
            }
        }
        return date;
    }.property("value")
});

Jt76EmberBase.RequiredField = Ember.TextField.extend({
    type: "text",
    value: null,
    errorDisplay: function (key, text) {
        var value = this.get("value");
        if (value && value.length > 0)
            return "";
        else 
            return "Required";
    }.property("value")
});

Jt76EmberBase.RequiredLengthField = Ember.TextField.extend({
    type: "text",
    date: function (key, date) {
        if (date) {
            this.set("value", date.toISOString().substring(0, 10));
        } else {
            var value = this.get("value");
            if (value) {
                date = new Date(value);
            } else {
                date = null;
            }
        }
        return date;
    }.property("value")
});

Jt76EmberBase.LengthField = Ember.TextField.extend({
    type: "text",
    date: function (key, date) {
        if (date) {
            this.set("value", date.toISOString().substring(0, 10));
        } else {
            var value = this.get("value");
            if (value) {
                date = new Date(value);
            } else {
                date = null;
            }
        }
        return date;
    }.property("value")
});