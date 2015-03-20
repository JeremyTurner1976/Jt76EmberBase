Note: If handlebars are changed the matching HandleBarsHelper nuget package must be installed

http://Jt76EmberBase/Help will load the web api help area (VS Template item)

jsbin - awesome place to get a quick page running
cdnjs - has downloadable scripts
ember - official page has a starter kit
http://emberjs.com/api/
http://emberjs.com/api/data/

{{}} always looks first in the controller, then in the model

{{bind-attr src="src" alt="title"}} for most other native html elements
class inside of helpers - :class means always  variable:truthy:falsy variable:truthy or variable::falsy
tagName="li" inside of helpers - link-to as a <li>, etc

//If the resource has a path with title, sending this will automatically choose title for url param. No need to send this.title specifically
{{#link-to 'product' this tagName='button' classNames='btn btn-success'}}Buy for ${{price}}{{/link-to}}

//targets possible on actions or use Send
{{action "gotoPage" "Prev" target=view.parentView.controller}}
this.set("parentView.controller.paginationData", this.get("pagination"));
this.get("parentView.controller").send("gotoPage"); //, item); //objects can be passed, as many as needed separated by commas

//ember array helpers
data.forEach(function(item){
});
data.findBy("paramName", key);
data.slice(0,3);

renderTemplate: function() {
	this.render('favoritePost', {   // the template to render
		into: 'posts',                // the template to render into
		outlet: 'posts',              // the name of the outlet in that template
		controller: 'blogPost'        // the controller to use for the template
	});
}

this.modelFor("indexErrors") to get another model's data

this.store.unloadAll("error") to clear the cache
this.get('content').deleteRecord();        
this.get('content.transaction').commit();

Shorthand for function(){...}.property("controller.bIsLoaded")
Ember.computed.alias("controller.bIsLoaded") to set a property that is bound to the controllers bIsLoaded property for change events 

.property().volatile() means it is reloaded every time it is called

willDestroyElement: function () {
    var clone = this.$().clone();
    this.$().parent().append(clone);
    setTimeout(function () {
        clone.removeClass("jt76-loaded-slide");
        clone.addClass("jt76-unloaded-slide");
    }, 50); //give the dom time to set the jt76-loading class then switch it
    //clone.fadeOut();
}

    className: ["jt76-loading-slide"],
    classNameBindings: ["bIsLoading"],
    bIsLoading: function () {
        return this.get("controller.bIsLoaded") ? "jt76-loaded-slide" : "jt76-loading-slide";
    }.property("controller.bIsLoaded")
	also
	jt76LoadedSlide: Ember.computed.alias("controller.bIsLoaded"), //will give the hyphenated class based on caps of jt76-loaded-slide
	jt76LoadingSlide: !Ember.computed.alias("controller.bIsLoaded"), //will give the hyphenated class based on caps of jt76-loading-slide

	{{view App.TextField value=model.searchValue placeholder=model.searchHint classBinding="isSearchFormValid::invalid" tabindex="1" type="text" id="search-value" aria-label="Search For" maxlength=60 }}

	partials are components with nothing needed to be passed in, holds access to the parent controller
	Partials must be named with an _ ie, _singleItemButtonSet.hbs

http://stackoverflow.com/questions/15235574/ember-data-reloading-content-ui-not-updating
https://github.com/heartsentwined/ember-auth
http://stackoverflow.com/questions/18863710/how-do-i-call-an-action-method-on-controller-from-the-outside-with-the-same-beh
