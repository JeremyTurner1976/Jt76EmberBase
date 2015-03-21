/*_____________SLIDING_VIEW_____________*/
Jt76EmberBase.SlidingView = Ember.View.extend({
    willInsertElement: function () {
        var self = this.$();
        self.addClass("jt76-slow-slide-out");
    },
    didInsertElement: function () {
        var self = this.$();
        setTimeout(function () {
            self.removeClass("jt76-slow-slide-out");
            self.addClass("jt76-slow-slide-in");
        }, 50); //give the dom time to set the jt76-loading class then switch it
    }
});

/*_____________EXPANDING_SINGLE_ITEM_VIEW_____________*/
/* ie in a table ouput (see LogMessages.hbs)
<td class="col-sm-10 jt76-no-select">
    {{#view Jt76EmberBase.ExpandingSingleItemView strText=item.[YOURVARIABLE] nMaxLength=[YOURMAXLENGTH]}}
    {{#link-to "[YOURLINK]" item}}<div class="jt76-title-link">{{view.formattedText}}</div>{{/link-to}}
    {{#if view.jt76ReadMore}}
    <span class="text-success">Read{{#if view.jt76IsExpanded}} Less {{else}} More {{/if}}</span>
    {{/if}}
    {{/view}}
</td>
*/
Jt76EmberBase.ExpandingSingleItemView = Ember.View.extend({
    formattedText: function () {
        return (this.get("jt76IsExpanded")) ?
            this.get("strText") :
            this.get("strText").substring(0, this.get("nMaxLength")) + (this.get("jt76ReadMore") ? "..." : "");
    }.property("jt76IsExpanded"),
    classNameBindings: ["jt76IsExpanded", "jt76ReadMore"],
    jt76IsExpanded: false,
    jt76ReadMore: function () {
        return this.get("strText.length") > this.get("nMaxLength") ? true : false;
    }.property(),

    click: function () {
        if (this.get("strText.length") > this.get("nMaxLength"))
            this.set("jt76IsExpanded", !this.get("jt76IsExpanded"));

        return true;
    }
});